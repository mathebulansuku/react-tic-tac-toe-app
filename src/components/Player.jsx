import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  return (
    <li>
      {!isEditing ? (
        <span className="player-name">{name}</span>
      ) : (
        <input type="text" required value={name} />
      )}
      <span className="player">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
