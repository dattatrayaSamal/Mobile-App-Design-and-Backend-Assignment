import Img from "./Img";
function FoodTile({ src, emoji, price, from, to, onClick }) {
  return (
    <div
      className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <Img
        src={src}
        emoji={emoji}
        from={from}
        to={to}
        className="h-full w-full text-xl"
      />
      <span className="absolute bottom-0 right-0 rounded-tl-md bg-[#FF5A00] px-1 py-px text-[7px] font-bold text-white">
        {price}
      </span>
    </div>
  );
}
export default FoodTile;
