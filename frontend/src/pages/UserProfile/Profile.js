import React from "react";
import Navbar from "../../components/NavBar/navbar";

import { useAuthContext } from "../../hooks/useAuthContext";
import UserProfile from "../../components/userProfile/UserProfile";

export default function Profile() {
  const { user } = useAuthContext();

  console.log(user.user._id);
  return (
    <div>
      {/* <Navbar /> */}
      <UserProfile />
    </div>
  );
}
