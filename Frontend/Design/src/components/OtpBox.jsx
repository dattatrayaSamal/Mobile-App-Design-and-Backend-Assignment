function OtpBox({ first }) {
  return (
    <input
      maxLength={1}
      inputMode="numeric"
      className={`h-[38px] w-[38px] rounded-md border bg-[#F6F6F8] text-center text-[16px] font-bold outline-none focus:border-[#FF5A00] ${
        first ? "border-[#FF5A00]" : "border-gray-200"
      }`}
    />
  );
}
export default OtpBox;
