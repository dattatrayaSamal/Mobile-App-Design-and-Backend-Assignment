import Phone from "../components/Phone";
import Img from "../components/Img";
import FoodTile from "../components/FoodTile";
import OrderRow from "../components/OrderRow";
import { IMG } from "../constants/images";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Phone label="Signup">
      <div className="flex-1 overflow-hidden px-4">
        <p className="text-[8px] text-gray-400">Current Location</p>
        <p className="text-[10px] font-bold text-[#1c2230]">
          Model Town, New Delhi
        </p>

        {/* search + 2 icon buttons */}

        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 rounded-lg bg-[#F3F3F5] px-3 py-3 text-[12px] text-[#1c2230]">
            Karan
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF8A5B] to-[#FF6B3D]"
            aria-label="Call"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.3.55 3.4a1 1 0 01-.25 1z" />
            </svg>
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#5AA9F6] to-[#4B6BE0]"
            aria-label="Wallet"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M3 6a2 2 0 012-2h13v3H5v1h15a1 1 0 011 1v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm14 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </button>
        </div>

        <h2 className="mt-5 text-[13px] font-extrabold text-[#1c2230]">
          Best Seller
        </h2>

        <div className="mt-2 flex gap-2 overflow-hidden">
          <FoodTile
            src={IMG.sushi}
            emoji="🍣"
            price="$103.0"
            from="#ffb4a2"
            to="#e5546b"
            onClick={() => navigate("/item/sushi")}
          />

          <FoodTile
            src={IMG.salad}
            emoji="🥗"
            price="$50.0"
            from="#ffd27a"
            to="#d08a1f"
          />

          <FoodTile
            src={IMG.burger}
            emoji="🍲"
            price="$12.99"
            from="#b8d98a"
            to="#6a9a3a"
          />

          <FoodTile
            src={IMG.cake}
            emoji="🧁"
            price="$8.20"
            from="#f4b8c8"
            to="#9c3b5e"
          />
        </div>

        {/* promo banner */}

        <div className="relative mt-4 flex h-[72px] overflow-hidden rounded-2xl bg-[#F36A22]">
          <div className="z-10 flex w-[48%] flex-col justify-center pl-3 text-white">
            <p className="text-[8px] leading-tight">
              Experience our
              <br />
              delicious new dish
            </p>

            <p className="mt-0.5 text-[17px] font-extrabold leading-none">
              30% OFF
            </p>
          </div>

          <Img
            src={IMG.pizza}
            emoji="🍕"
            from="#e9a15b"
            to="#a2441a"
            className="absolute right-0 top-0 h-full w-[55%] rounded-l-[40px] text-3xl"
          />
        </div>

        <div className="mt-1.5 flex justify-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full ${i === 2 ? "w-4 bg-[#FF5A00]" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>

        <h2 className="mt-4 text-[13px] font-extrabold text-[#1c2230]">
          Popular Items
        </h2>

        <OrderRow
          src={IMG.shake}
          emoji="🥤"
          name="Strawberry Shake"
          price="₹20.00"
          date="29 Nov, 01:20 pm"
          count="2 items"
          from="#ffc4d4"
          to="#e0557f"
        />

        <OrderRow
          src={IMG.chickenBurger}
          emoji="🍔"
          name="Chicken Burger"
          price="₹20.00"
          date="17 Oct, 01:20 pm"
          count="1 item"
          from="#f3c27a"
          to="#b4651c"
        />
      </div>
    </Phone>
  );
}

export default Home;
