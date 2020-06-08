import React from "react";
import Link from "next/link";

const GotoSignUp = () => {
  return (
    <div className="form-note text-center">
      اکانت ندارید؟
      <Link href="/signup">
        <a>اکنون ثبت نام کنید</a>
      </Link>
    </div>
  );
};

export default GotoSignUp;
