import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    let changeName = event.target.value;
    setPlayerName(changeName);
  }

  return (
    <li className={isActive ? "active" : null}>
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
