import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={user.id} className="user-card">
          <UserImage src={user.image} alt={user.name} className="user-image" />
          <UserName className="user-name">{user.name}</UserName>
          <UserId className="user-id">{user.id}</UserId>
          <UserStatus
            className="user-status"
            species={user.species}
          ></UserStatus>
          <UserSpecies className="user-species">{user.species}</UserSpecies>
        </UserCard>
      ))}
    </UserListContainer>
  );
};

export default Users;

const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f4f4f9;
`;

const UserCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  margin: 15px;
  padding: 20px;
  width: 250px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const UserName = styled.h1`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
`;

const UserId = styled.h2`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const UserStatus = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ species }) =>
    species === "Human"
      ? "#4CAF50"
      : species === "Alien"
      ? "#FF5722"
      : "#9E9E9E"};
  margin: 10px auto;
`;

const UserSpecies = styled.h3`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
`;
