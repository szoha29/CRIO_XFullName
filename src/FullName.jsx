import { React, useState } from "react";
const FullName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFullName(`Full Name: ${firstName} ${lastName}`);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstName}
          required
        />{" "}
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastName}
          required
        />{" "}
        <br />
        <button type="submit">Submit</button>
        <p className="fullName">{fullName}</p>
      </form>
    </div>
  );
};

export default FullName;
