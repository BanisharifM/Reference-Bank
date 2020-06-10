import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Switch } from "react-router-dom";
import { IRoute, renderRoutes } from "../routes";
import { dashboardRoutes } from "./Scenes/routes";

interface IProps {
  routes: IRoute[];
}
const index: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      {/* <BaseLayout> */}
      <Switch>{renderRoutes(routes)}</Switch>
      {/* </BaseLayout> */}
    </>
  );
};

export default index;
