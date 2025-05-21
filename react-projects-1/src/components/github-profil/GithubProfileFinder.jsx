import { useEffect, useState } from "react";
import "./GithubProfileFinder.css";
import { User } from "./User";

export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Barbora6");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    console.log(data);
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Data se načítají. Prosím vyčkejte!</h1>;
  }

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
        <button className="btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};
