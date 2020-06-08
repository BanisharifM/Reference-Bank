import React from "react";

const Footer = () => {
  return (
    <footer className="footer_dark">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget">
                <h6 className="widget_title">اطلاعات تماس</h6>
                <ul className="contact_info contact_info_light">
                  <li>
                    <i className="ti-location-pin"></i>
                    <p>اصفهان- دروازه تهران- خیابان باهنر</p>
                  </li>
                  <li>
                    <i className="ti-email"></i>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </li>
                  <li>
                    <i className="ti-mobile"></i>
                    <p>+989140761390</p>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <ul className="social_icons rounded_social">
                  <li>
                    <a href="#" className="sc_facebook">
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <i className="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_google">
                      <i className="ion-social-googleplus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <i className="ion-social-youtube-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <i className="ion-social-instagram-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">پیوندها</h6>
                <ul className="widget_links">
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">موقعیت</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">حساب من</h6>
                <ul className="widget_links">
                  <li>
                    <a href="#">حساب من</a>
                  </li>
                  <li>
                    <a href="#">خارج شده</a>
                  </li>
                  <li>
                    <a href="#">برگشت</a>
                  </li>
                  <li>
                    <a href="#">تاریخچه سفارشات</a>
                  </li>
                  <li>
                    <a href="#">سفارشات ثبت شده</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="widget">
                <h6 className="widget_title">در خبرنامه ما عضو شوید</h6>
                <p>
                  اگر می خواهید هر بار پیشنهاد ویژه جدیدی از ما ایمیل بگیرید ،
                  پس از آن وارد شوید!
                </p>
                <div className="newsletter_form rounded_input">
                  <form>
                    <input
                      type="text"
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
          </div>
        </div>
      </div>
      <div className="bottom_footer border-top-tran">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <p className="mb-md-0 text-center text-md-center">
                تمام حقوق این سایت محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
