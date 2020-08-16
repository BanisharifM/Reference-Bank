import React from "react";
import { Switch } from "react-router-dom";
import { IRoute, renderRoutes } from "../routes";

interface IProps {
  routes: IRoute[];
}
const index: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      <Switch>{renderRoutes(routes)}</Switch>
    </>
  );
};
export default index;
