import Img from "./Img";
function OrderRow({ src, emoji, name, price, date, count, from, to }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 py-3">
      <Img
        src={src}
        emoji={emoji}
        from={from}
        to={to}
        className="h-[58px] w-[44px] shrink-0 rounded-xl text-2xl"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <p className="text-[12px] font-bold text-[#1c2230]">{name}</p>
          <p className="text-[13px] font-extrabold text-[#FF5A00]">{price}</p>
        </div>
        <div className="mt-0.5 flex justify-between text-[9px] text-gray-500">
          <span>{date}</span>
          <span>{count}</span>
        </div>
        <div className="mt-1.5 flex gap-2">
          <button className="rounded-full bg-[#FF5A00] px-3 py-1 text-[9px] font-bold text-white">
            Cancel Order
          </button>
          <button className="rounded-full bg-[#FFE3D2] px-3 py-1 text-[9px] font-bold text-[#FF5A00]">
            Track Driver
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderRow;
