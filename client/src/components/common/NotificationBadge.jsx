import { Bell } from "lucide-react";

import { motion } from "framer-motion";

function NotificationBadge({
  count = 0,
}) {

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      className="
        relative
        w-14
        h-14
        rounded-2xl
        glass
        border
        border-white/10
        flex
        items-center
        justify-center
        cursor-pointer
      "
    >

      <Bell size={22} />

      {
        count > 0 && (

          <div
            className="
              absolute
              -top-2
              -right-2
              min-w-[24px]
              h-6
              px-1
              rounded-full
              bg-red-500
              flex
              items-center
              justify-center
              text-xs
              font-bold
              shadow-lg
            "
          >
            {count}
          </div>

        )
      }

    </motion.div>
  );
}

export default NotificationBadge;