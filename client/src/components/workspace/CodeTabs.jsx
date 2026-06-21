function CodeTabs({
  activeTab,
  setActiveTab,
}) {

  const tabs = [
    {
      id: "html",
      label: "HTML",
    },
    {
      id: "css",
      label: "CSS",
    },
    {
      id: "js",
      label: "JavaScript",
    },
  ];

  return (
    <div
      className="
        flex
        items-center
        gap-3
        flex-wrap
      "
    >

      {
        tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(tab.id)
            }
            className={`
              px-5
              py-2.5
              rounded-2xl
              font-medium
              transition-all
              duration-300

              ${
                activeTab === tab.id
                ? "bg-cyan-500 glow text-white"
                : "bg-white/5 hover:bg-white/10 text-gray-300"
              }
            `}
          >
            {tab.label}
          </button>

        ))
      }

    </div>
  );
}

export default CodeTabs;