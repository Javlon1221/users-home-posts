import React, { useEffect, useState } from "react";

const ProfileCard = ({ user }) => (
  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6">
    <div className="flex items-center space-x-4">
      <img
        className="h-20 w-20 rounded-full object-cover"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div>
        <h2 className="text-xl font-medium text-black">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
    <div className="mt-4 space-y-1 text-gray-700">
      <p>
        <span className="font-semibold">Username:</span> {user.username}
      </p>
      <p>
        <span className="font-semibold">Gender:</span> {user.gender}
      </p>
      <p>
        <span className="font-semibold">Age:</span> {user.age}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold">Address:</span> {user.address?.address},{" "}
        {user.address?.city}
      </p>
    </div>
  </div>
);

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-gray-700">Loading...</div>;
  if (!user)
    return <div className="text-center mt-10 text-red-500">User not found</div>;

  return <ProfileCard user={user} />;
};

export default Profile;
