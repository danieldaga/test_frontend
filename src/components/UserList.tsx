import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://random-data-api.com/api/v2/users?size=100"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="w-full md:w-auto">
          <UserCard
            avatarUrl={`https://robohash.org/${user.id}`}
            userName={`${user.first_name} ${user.last_name}`}
            userMail={user.email}
            userPhone={user.phone_number}
          />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
