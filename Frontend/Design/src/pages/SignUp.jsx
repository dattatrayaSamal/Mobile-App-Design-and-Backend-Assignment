import Phone from "../components/Phone";
import BackArrow from "../components/BackArrow";
import PrimaryButton from "../components/PrimaryButton";
import Keypad from "../components/Keypad";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <Phone label="Signup">
      <div className="flex flex-1 flex-col px-6">
        <BackArrow />
        <h1 className="mt-5 text-[24px] font-extrabold text-[#1c2230]">
          Sign Up to Fastor
        </h1>
        <p className="mt-2 text-[11px] leading-snug text-gray-500">
          Let us know your mobile number and we will send
          <br />
          you an OTP for verification.
        </p>

        <div className="mt-6 flex items-center rounded-lg bg-[#F1F1F3] px-3 py-[14px] text-[13px]">
          <span className="font-bold text-[#1c2230]">+91</span>
          <span className="ml-3 h-4 w-px bg-[#FF5A00]" />
          <span className="ml-3 border-l-0 text-gray-400">-</span>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="00000"
            className="ml-2 w-full bg-transparent text-[#1c2230] outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="mt-auto pb-3">
          <PrimaryButton onClick={() => navigate("/otp")}>
            Get OTP
          </PrimaryButton>
          <p className="mt-3 text-center text-[8.5px] text-gray-500">
            By clicking, I accept the{" "}
            <b className="text-[#1c2230]">Terms &amp; Conditions</b> &amp;{" "}
            <b className="text-[#1c2230]">Privacy Policy</b>
          </p>
        </div>
      </div>
      <Keypad />
    </Phone>
  );
}

export default SignUp;
