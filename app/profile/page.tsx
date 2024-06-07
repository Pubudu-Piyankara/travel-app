"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Profile = () => {
  const [data, setData] = useState(null);

  const getUserData = async () => {
    const res = await axios.get("/api/auth/user");
    setData(res.data.data._id); //res.data.data._id
    console.log(res.data);
  };
  return (
    <section>
      <button className="btn_green" onClick={getUserData}>
        get user details
      </button>

      <div>{data === null ? <div>Not Found </div> : <Link href={`/profile/${data}`}>{data}</Link>}</div>

      <div>profile details section</div>
    </section>
  );
};

export default Profile;
