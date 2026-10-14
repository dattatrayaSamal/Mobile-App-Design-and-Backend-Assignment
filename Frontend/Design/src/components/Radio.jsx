function Radio({ checked }) {
  return (
    <span
      className={`flex h-[14px] w-[14px] items-center justify-center rounded-full border ${
        checked ? "border-[#FF5A00]" : "border-[#FF5A00]/50"
      }`}
    >
      {checked && (
        <span className="h-[7px] w-[7px] rounded-full bg-[#FF5A00]" />
      )}
    </span>
  );
}

export default Radio;
