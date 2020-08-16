import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory({ basename: "/pannel" });
export const redirect = (path: string) => {
  browserHistory.push(path);
};
