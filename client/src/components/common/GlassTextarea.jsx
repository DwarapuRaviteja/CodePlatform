function GlassTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 6,
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

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-3xl
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
          px-5
          py-4
          leading-relaxed
        "
      />

    </div>
  );
}

export default GlassTextarea;