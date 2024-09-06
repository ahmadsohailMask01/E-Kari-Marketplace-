import React from "react";
import { GET } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getEmailFromSession = async () => {
  const session = await getServerSession(GET);
  const email = JSON.stringify(session?.user);
  console.log(email);
  return email;
};

export default getEmailFromSession;
