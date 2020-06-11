import React from "react";
import Link from "next/link";

const GotoLogin = () => {
  return (
    <div className="form-note text-center">
      اکانت دارید؟
      <Link href="/login">
        <a>وارد شوید</a>
      </Link>
    </div>
  );
};

export default GotoLogin;
