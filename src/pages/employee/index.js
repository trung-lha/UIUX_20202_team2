import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../../routes";
import Sidebar from "../../components/SidebarUser";
import { UserInfo } from "../../components/Navbar";
import Preloader from "../../components/Preloader";
import DashboardOverview from "./components/congviec";
import Kpi from "./components/kpi";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  console.log(2);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <UserInfo />
            <Component {...props} />
          </main>
        </>
      )}
    />
  );
};

export default () => {
  return (
    <Switch>
      <RouteWithSidebar
        exact
        path={Routes.CongViec.path}
        component={DashboardOverview}
      />
      <RouteWithSidebar exact path={Routes.Kpi.path} component={Kpi} />
      <Redirect to={Routes.NotFound.path} />
    </Switch>
  );
};
