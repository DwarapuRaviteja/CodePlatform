import { Search } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {

  return (
    <div
      className="
        relative
        w-full
      "
    >

      <div
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      >

        <Search size={20} />

      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          h-14
          pl-14
          pr-5
          rounded-2xl
          glass
          border
          border-white/10
          bg-white/5
          outline-none
          text-white
          placeholder:text-gray-500
          focus:border-cyan-400
          transition-all
          duration-300
        "
      />

    </div>
  );
}

export default SearchBar;