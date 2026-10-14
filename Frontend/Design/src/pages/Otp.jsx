import Phone from "../components/Phone";
import BackArrow from "../components/BackArrow";
import PrimaryButton from "../components/PrimaryButton";
import Keypad from "../components/Keypad";
import OtpBox from "../components/OtpBox";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  return (
    <Phone label="Signup">
      {" "}
      <div className="flex flex-1 flex-col px-6">
        <BackArrow />{" "}
        <h1 className="mt-5 text-[24px] font-extrabold text-[#1c2230]">
          6-digit code
        </h1>{" "}
        <p className="mt-2 text-[11px] leading-snug text-gray-500">
          Please enter the code we've sent to <br />
          <b className="text-[#1c2230]">+91 12345 67890</b>{" "}
        </p>{" "}
        <div className="mt-6 flex items-center gap-[6px]">
          <OtpBox first />
          <OtpBox />
          <OtpBox /> <span className="mx-1 text-gray-400">-</span>
          <OtpBox />
          <OtpBox />
          <OtpBox />{" "}
        </div>{" "}
        <p className="mt-3 text-[11px] text-[#1c2230]">
          I didn't receive a code{" "}
          <span className="text-[#FF5A00]">(00:30)</span>{" "}
        </p>{" "}
        <div className="mt-auto pb-3">
          <PrimaryButton onClick={() => navigate("/home")}>
            Continue
          </PrimaryButton>{" "}
        </div>{" "}
      </div>
      <Keypad />{" "}
    </Phone>
  );
}

export default Otp;
