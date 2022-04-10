import { Home, SignIn, SignUp } from "./screens";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Routing = () => {
  const history = useNavigate();
  const [user, setuser] = useState();
  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
      history("/signin");
    } else setuser(currentUser);
  }, []);

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
        </>
      ) : (
        <>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
