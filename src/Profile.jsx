import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <h1>Please log in to view your profile</h1>;
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Your account is now active.</p>
    </div>
  );
};

export default Profile;