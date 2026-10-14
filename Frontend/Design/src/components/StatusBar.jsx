function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[13px] font-bold text-black">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        {/* wifi */}
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M1 3.5a9 9 0 0113 0M3.3 6a5.7 5.7 0 018.4 0" />
          <circle cx="7.5" cy="9" r="1" fill="currentColor" stroke="none" />
        </svg>
        {/* battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3"
            stroke="currentColor"
            opacity=".4"
          />
          <rect x="2" y="2" width="18" height="8" rx="2" fill="currentColor" />
          <rect
            x="23"
            y="4"
            width="1.5"
            height="4"
            rx=".7"
            fill="currentColor"
            opacity=".4"
          />
        </svg>
      </div>
    </div>
  );
}
export default StatusBar;
