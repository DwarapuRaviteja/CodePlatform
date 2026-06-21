function WorkspaceLayout({
  left,
  center,
  right,
}) {

  return (
    <div
      className="
        grid
        grid-cols-1
        xl:grid-cols-[350px_1fr_420px]
        gap-6
        w-full
        h-full
      "
    >

      <div
        className="
          h-full
          min-h-[400px]
        "
      >
        {left}
      </div>

      <div
        className="
          h-full
          min-h-[400px]
        "
      >
        {center}
      </div>

      <div
        className="
          h-full
          min-h-[400px]
        "
      >
        {right}
      </div>

    </div>
  );
}

export default WorkspaceLayout;