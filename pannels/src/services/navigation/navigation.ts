import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();
export const redirect = (path: string) => {
  browserHistory.push(path);
};
