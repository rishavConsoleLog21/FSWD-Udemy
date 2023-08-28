import { useState } from "react";
export default function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changeField] = newValue;
      return { ...currData };
    });
  };
  return (
    <div>
      <label htmlFor="firstname">Enter A firstname</label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Enter A lastname</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <label htmlFor="password">Enter A password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password" // very important
        id="password"
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}
