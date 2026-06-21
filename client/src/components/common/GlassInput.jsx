function GlassInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {

  return (
    <div className="w-full">

      <label
        className="
          block
          text-sm
          text-gray-300
          mb-3
          font-medium
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          h-14
          px-5
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

export default GlassInput;