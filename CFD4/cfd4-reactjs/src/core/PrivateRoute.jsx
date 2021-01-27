import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { AppContext } from "../App";
import { useAuth } from "../hook/useAuth";

export default function PrivateRoute(props) {
  let auth = useAuth();
  let popupContext = useContext(AppContext);

  useEffect(() => {
    if (!auth.login) {
      popupContext.openPopupLogin();
    }
  }, [auth.login, popupContext]);

  if (auth.login) return <Route {...props} />;
  return (
    <div style={{ height: "500px", margin: "auto", display: "flex" }}>
      <div style={{ margin: "auto" }}>Bạn chưa đăng nhập</div>
    </div>
  );
}
