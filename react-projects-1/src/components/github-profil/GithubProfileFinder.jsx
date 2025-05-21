import { useEffect, useState } from "react";
import "./Style.css";

export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Barbora6");

  const fetchGithubUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = () => {};

  useEffect(() => {
    fetchGithubUserData();
  });

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};
