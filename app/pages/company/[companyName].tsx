import React from "react";
import TopHeader from "../../components/Company/Header/TopHeader";
import BottomHeader from "../../components/Company/Header/BottomHeader";
import BreadCrumsCompany from "../../components/Company/BreadCrumsCompany";
import { useRouter } from "next/router";
import CompanySlider from "../../components/Company/CompanySlider";
import RecentCart from "../../components/shared/Cards/RecentCart";
import Footer from "../../components/MainPage/Footer/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";

const CompanyMap = dynamic(
  () => import("../../components/Company/CompanyMap"),
  {
    ssr: false,
  }
);

export const Company = () => {
  const { query } = useRouter();
  return (
    <>
      <div
        className="header_sticky_bar d-none"
        style={{ height: "120px" }}
      ></div>
      <header className="header_wrap fixed-top header_with_topbar">
        <BottomHeader />
      </header>

      <BreadCrumsCompany companyName={query.companyName as string} />
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <div className="single_post">
                  <h2 className="blog_title">شرکت کاله</h2>
                  <ul className="list_none blog_meta">
                    <li>
                      <a href="#">
                        <i className="ti-calendar"></i> ثبت شده در تاریخ
                        ۱۳/۲/۱۳۹۹
                      </a>
                    </li>
                  </ul>
                  <div className="blog_img">
                    <CompanySlider />
                  </div>
                  <div className="blog_content">
                    <div className="blog_text">
                      <p>
                        برند کاله باهدف بهبود و ارتقای سطح سبد غذایی مردم ایران
                        در سال ۱۳۷۰ تأسیس شد. نتیجه فعالیت‌های انجام‌شده در این
                        مجموعه طی سال‌های گذشته که همگی در راستای ارتقای سبد
                        غذایی هم‌وطنان و سرافرازی ایران اسلامی است، این برند را
                        در جایگاه ۴۸ام صنایع غذایی در جهان (به گزارش یورو
                        مانیتور)، برند محبوب و برتر و ۷ سال تنها صادرکننده نمونه
                        در فرآورده‌های لبنی در ایران قرار داده است.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <CompanyMap />
                </div>
              </div>
              <div className="col-xl-3 mt-4 pt-2 mt-xl-0 pt-xl-0">
                <div className="sidebar">
                  <div className="widget">
                    <div className="search_form">
                      <form>
                        <input
                          className="form-control"
                          placeholder="جستجو..."
                          type="text"
                        />
                        <button
                          type="submit"
                          title="Subscribe"
                          className="btn icon_search"
                          name="submit"
                          value="Submit"
                        >
                          <i className="ion-ios-search-strong"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="widget">
                    <h5 className="widget_title">محصولات اخیر</h5>
                    <ul className="widget_recent_post">
                      <li>
                        <RecentCart
                          image="/images/kalehrecent3.png"
                          name="لاکی فروت سیب"
                          price={45.0}
                        />
                      </li>
                      <li>
                        <RecentCart
                          image="/images/kalehrecent2.jpg"
                          name="کافه لته "
                          price={30.0}
                        />
                      </li>

                      <li>
                        <RecentCart
                          image="/images/kalehrecent1.jpg"
                          name="ماست لاکتیویا"
                          price={10.0}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h5 className="widget_title">اطلاعات شرکت</h5>

                    <ul className="contact_info contact_info_dark">
                      <li>
                        <i className="ti-location-pin"></i>
                        <p>
                          تهران، خیابان جمهوری، خیابان ۱۲ فروردین نبش تقاطع
                          خیابان آذربایجان، پلاک ۱۳۶
                        </p>
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <a href="mailto:info@kalleh.com">info@kalleh.com</a>
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <p>021-66454511</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Company;
