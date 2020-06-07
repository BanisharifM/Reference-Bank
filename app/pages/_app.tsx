import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { wrapper } from "../redux";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps, ...rest }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
