import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    let changeName = event.target.value;
    setPlayerName(changeName);
  }

  return (
    <li>
      {!isEditing ? (
        <span className="player-name">{playerName}</span>
      ) : (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleChange}
        />
      )}
      <span className="player">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
