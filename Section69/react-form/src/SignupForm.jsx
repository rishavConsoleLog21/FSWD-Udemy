import { useState } from "react";
export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSumbit = () => {
    console.log(firstName,lastName );
  }

  return (
    <div>
        <label htmlFor="firstname">Enter A firstname</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
        <label htmlFor="lastname">Enter A lastname</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button onClick={handleSumbit}>Submit</button>
    </div>
  );
}
