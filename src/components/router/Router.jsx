import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import AboutUs from "../AboutUs";
import EmployeeList from "../Employee/ShowEmployees";
import Orders from "../Order/Orders";
import OrderDetails from "../Order/OrderDetails";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Home" component={AboutUs} />
          <Route exact path="/Employee" component={EmployeeList} />
          <Route exact path="/Order/:id" component={OrderDetails} />
          <Route exact path="/Orders" component={Orders} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
