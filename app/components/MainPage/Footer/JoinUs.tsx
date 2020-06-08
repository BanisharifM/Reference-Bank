import React, { useState } from "react";

const JoinUs = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="widget">
        <h6 className="widget_title">در خبرنامه ما عضو شوید</h6>
        <p>
          اگر می خواهید هر بار پیشنهاد ویژه جدیدی از ما ایمیل بگیرید ، پس از آن
          وارد شوید!
        </p>
        <div className="newsletter_form rounded_input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="form-control"
              placeholder="ایمیل را وارد کنید"
            />
            <button
              type="submit"
              className="btn-send"
              name="submit"
              value="Submit"
            >
              <i className="icon-envelope-letter"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
