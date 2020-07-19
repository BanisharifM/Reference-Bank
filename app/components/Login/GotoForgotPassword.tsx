import React from "react";
import Link from "next/link";

const GotoForgotPassword = () => {
  return (
	<div className="login_footer form-group text-ceter">
    <Link href="/forgot-password">
      <a>رمز عبور را فراموش کردید؟</a>
    </Link>
	</div>
  );
};

export default GotoForgotPassword;
