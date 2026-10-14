function Keypad() {
  const keys = [
    ["1", ""],
    ["2", "ABC"],
    ["3", "DEF"],
    ["4", "GHI"],
    ["5", "JKL"],
    ["6", "MNO"],
    ["7", "PQRS"],
    ["8", "TUV"],
    ["9", "WXYZ"],
  ];
  const keyCls =
    "flex h-[46px] flex-col items-center justify-center rounded-[5px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.3)]";
  return (
    <div className="mt-auto bg-[#D1D3D9] px-[6px] pb-8 pt-[8px]">
      <div className="grid grid-cols-3 gap-x-[6px] gap-y-[8px]">
        {keys.map(([n, l]) => (
          <button key={n} className={keyCls}>
            <span className="text-[22px] leading-none">{n}</span>
            <span className="mt-0.5 text-[9px] font-semibold leading-none tracking-wider text-black/70">
              {l}
            </span>
          </button>
        ))}
        <span />
        <button className={keyCls}>
          <span className="text-[22px] leading-none">0</span>
        </button>
        <button
          className="flex h-[46px] items-center justify-center"
          aria-label="Delete"
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          >
            <path d="M8 1h13a2 2 0 012 2v12a2 2 0 01-2 2H8L1 9l7-8z" />
            <path d="M12 6l6 6M18 6l-6 6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Keypad;
