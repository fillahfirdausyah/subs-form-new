import React from "react";
import { Route, Redirect } from "react-router-dom";

// Context
import { useAuth } from "../Context/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
