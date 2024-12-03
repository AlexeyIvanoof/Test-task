import React from "react";
import UserItem from "../UserItem";
import "./UserList.css";

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="list-user">
      <ul className="ul">
        {users.map((user) => (
          <li key={user.id} data-testid={`user-item-${user.id}`}>
            <UserItem
              key={user.id}
              user={user}
              onClick={() => onUserClick(user)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
