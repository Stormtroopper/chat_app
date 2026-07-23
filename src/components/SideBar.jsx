import React from "react";

function Sidebar({ users }) {
  return (
    <aside className="sidebar">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;