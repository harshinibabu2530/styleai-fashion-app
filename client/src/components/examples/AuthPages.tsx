import { useState } from "react";
import { LoginPage, SignUpPage } from "../AuthPages";

export default function AuthPagesExample() {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    return (
      <LoginPage
        onLogin={() => console.log("Login successful")}
        onSwitchToSignUp={() => setIsLogin(false)}
      />
    );
  }

  return (
    <SignUpPage
      onSignUp={() => console.log("Sign up successful")}
      onSwitchToLogin={() => setIsLogin(true)}
    />
  );
}
