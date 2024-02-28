import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

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
        const response = await axios.get('https://random-data-api.com/api/v2/users?size=100');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
          <div key={user.id} style={{ width: '30%', margin: '1%', float: 'left' }}>
            <UserCard avatarUrl={`https://robohash.org/${user.id}`} userName={`${user.first_name} ${user.last_name}`} userMail={user.email} userPhone={user.phone_number} />
          {/* <img src={`https://robohash.org/${user.id}`} alt="avatar" />
          <div>
            <p>Name: {`${user.first_name} ${user.last_name}`}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone_number}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default UsersList;