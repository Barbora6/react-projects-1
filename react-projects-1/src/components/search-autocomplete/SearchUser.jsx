import { useEffect, useState } from "react";

export const SearchUser = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchListOfUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Vyhledej uživatele..."
      />
    </div>
  );
};
