import { useState } from "react";
export default function UserForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
        <label htmlFor="username">Enter A Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
