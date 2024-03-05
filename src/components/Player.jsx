import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(true);
  }

  return (
    <li>
      {!isEditing ? (
        <span className="player-name">{name}</span>
      ) : (
        <input type="text"></input>
      )}
      <span className="player">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
}
