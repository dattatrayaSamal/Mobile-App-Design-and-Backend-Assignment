function Img({ src, emoji, className = "", from = "#f6c58f", to = "#d9722b" }) {
  if (src)
    return <img src={src} alt="" className={`object-cover ${className}`} />;
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="text-4xl">{emoji}</span>
    </div>
  );
}
export default Img;
