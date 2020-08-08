import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import "../assets/css2/global.css";
// import "../assets/css/animate-rtl.css"
// import "../assets/bootstrap/css/bootstrap-rtl.min.css"
// import "../assets/css/all-rtl.min.css";
// import "../assets/css/ionicons-rtl.min.css";
// import "../assets/css/themify-icons-rtl.css";
// import "../assets/css/linearicons-rtl.css";
// import "../assets/css/flaticon-rtl.css";
// import "../assets/css/simple-line-icons-rtl.css";
// import "../assets/css/magnific-popup-rtl.css";
// import "../assets/css/slick-rtl.css";
//
// import "../assets/owlcarousel/css/owl.carousel.min.css"
// import "../assets/owlcarousel/css/owl.theme.css"
// import "../assets/owlcarousel/css/owl.theme.default.min.css"
//
// import "../assets/css/style-rtl.css";
// import "../assets/css/responsive-rtl.css";
//
//
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

{
  /* <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css">
<link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css">
<link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.default.min.css"> */
}
import Head from "next/head";
const MyApp: React.FC<AppProps> = ({ Component, pageProps, ...rest }) => {
  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
// export default wrapper.withRedux(MyApp);
