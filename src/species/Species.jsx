export function Species({ name, language, averageLifespan }) {
  return (
    <li className="li1">
      {name}

      <ul>
        <li>language:{language}</li>
        <li>average lifespan:{averageLifespan}</li>
      </ul>
    </li>
  );
}
