"use client";
import React from "react";
import { useSession } from "next-auth/react";
import User_Login from "./user_login";
import User_Dashboard from "./user_dashboard";

const UserInfo = () => {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <User_Dashboard />
      </>
    );
  } else {
    return (
      <>
        <User_Login />
      </>
    );
  }
};

export default UserInfo;
