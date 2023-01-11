export function Person({ name, hairColor, eyeColor }) {
  return (
    <li className="li1">
      {name}

      <ul>
        <li>hair:{hairColor}</li>
        <li>eyes:{eyeColor}</li>
      </ul>
    </li>
  );
}
