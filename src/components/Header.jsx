export default function Header({ title }) {
  return (
    <header>
      <img src="../../public/game-logo.png" alt="Game" />
      <h1>{title}</h1>
    </header>
  );
}
