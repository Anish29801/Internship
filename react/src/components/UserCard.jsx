import React from "react";

export default function UserCard({ name, email, picture }) {
  return (
    <div style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
