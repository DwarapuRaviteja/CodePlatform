function GlassCard({
  children,
  className = "",
}) {

  return (
    <div
      className={`
        glass
        rounded-3xl
        border
        border-white/10
        shadow-2xl
        overflow-hidden
        ${className}
      `}
    >

      {children}

    </div>
  );
}

export default GlassCard;