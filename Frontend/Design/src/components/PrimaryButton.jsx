function PrimaryButton({ children, className = "", onClick }) {
  return (
    <button
      className={`w-full rounded-lg bg-[#FF5A00] py-3.5 text-[15px] font-semibold text-white active:scale-[0.99] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default PrimaryButton;
