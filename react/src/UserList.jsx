import React, { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";

export default function UserList({ count }) {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error(err));
  }, [count]); 

  return (
    <div>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user, index) => (
          <UserCard 
            key={index}
            name={`${user.name.first} ${user.name.last}`} 
            email={user.email}
            picture={user.picture.medium}
          />
        ))
      )}
    </div>
  );
}
