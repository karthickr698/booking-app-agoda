import React from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Login from "../Components/Auth/Login";
import NotFound from "../Components/Auth/NotFound";
import Listing from "../Components/Listing/HotelListing";

// const Pages = () => (
//   <Switch>
//     <Route exact path="/" component={MySchedules} />
//     <Route exact path="/meetings" component={Meetings} />
//     <Route exact path="/to-do-list" component={ToDoList} />
//     <Route exact path="/recurring" component={Recurring} />
//     <Route exact path="/google/calendar/" component={VerifyGoogleAuth} />
//     <Route
//       exact
//       path="/meetings/meeting-details/:id/:name"
//       component={MeetingDetles}
//     />
//   </Switch>
// );

// const wrappedRoutes = (props) => (
//   <div>
//     <Home props={props} />
//     <div className="home-main">
//       <Route path="/" component={Pages} />
//     </div>
//   </div>
// );

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Listing} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
