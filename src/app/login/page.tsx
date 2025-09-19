"use client";
import AlternativeLoginButtons from "@/components/login/AlternativeLoginButtons";
import Divider from "@/components/login/Divider";
import ForgotPassword from "@/components/login/ForgotPassword";
import GetOtpButton from "@/components/login/GetOtpButton";
import InputFieldsOtp from "@/components/login/InputFieldsOtp";
import InputFieldsPassword from "@/components/login/InputFieldsPassword";
import LoginTabs from "@/components/login/LoginTabs";
import Logo from "@/components/login/Logo";
import WelcomeSection from "@/components/login/WelcomeSection";
import { useState } from "react";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">(
    "password"
  );
  return (
    <div className="px-[30px] pt-[41px]">
      <Logo />
      <WelcomeSection />
      <LoginTabs selected={loginMethod} onSelect={setLoginMethod} />
      {loginMethod === "password" ? (
        <>
          <InputFieldsPassword />
          <ForgotPassword />
        </>
      ) : (
        <>
          <InputFieldsOtp />
          <GetOtpButton />
        </>
      )}
      <Divider />
      <AlternativeLoginButtons />
    </div>
  );
};

export default Login;
