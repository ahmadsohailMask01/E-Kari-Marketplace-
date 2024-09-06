import React from "react";
import User_Dashboard from "../../components/user_dashboard";

const page = ({ params }) => {
  const { email } = params;
  return (
    <>
      <User_Dashboard email={email} />
    </>
  );
};

export default page;
