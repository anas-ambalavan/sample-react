import React from "react";

const UserFunctional = ({ userData }) => {
  const { login, avatar_url } = userData;
  return (
    <div
      style={{
        border: "1px solid grey",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <img width={150} height={150} src={avatar_url} alt="profile" />
      <p>{login}</p>
    </div>
  );
};

export default UserFunctional;
