import React from "react";
import { IRoute, renderRoutes } from "../routes";
import { Switch } from "react-router-dom";

interface IProps {
  routes: IRoute[];
}
const index: React.FC<IProps> = ({ routes }) => {
  return (
    <div>
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  );
};

export default index;
