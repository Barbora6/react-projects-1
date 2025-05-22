// vyhledávání uživatelů s automatickým doplňováním (autocomplete). Je napsaná v JavaScriptu (s Reactem) a načítá seznam uživatelů z externího API.

import { useEffect, useState } from "react";
import { Suggestion } from "./Suggestion";
import "./SearchUser.css";

export const SearchUser = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  //   text z inputů
  const [searchParam, setSearchParam] = useState("");
  //   zobrazení návrhů jmen
  const [showDropdown, setShowDropdown] = useState(false);
  //   filtrování uživatelů
  const [filteredUsers, setFilteredUsers] = useState([]);

  //   Spouští se při psaní do inputu. Uloží vstup do searchParam. Pokud je vstup delší než 1 znak, vyfiltruje uživatele podle jména (indexOf(query)), uloží do filteredUsers a zobrazí dropdown. Pokud ne, dropdown se skryje.
  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  //   Spustí se, když uživatel klikne na návrh (li). Skryje dropdown, nastaví zvolený text do inputu.

  const handleClick = (event) => {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  //   Asynchronně načte seznam uživatelů z API. Pokud uspěje, uloží do users pouze firstName každého uživatele.

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      <h2>Vyhledávání uživatelů</h2>
      {loading ? (
        <h1>Data se načítají...</h1>
      ) : (
        <input
          className="input-search-users"
          type="text"
          name="search-users"
          placeholder="Vyhledej uživatele..."
          value={searchParam}
          onChange={handleChange}
        />
      )}
      {error && (
        <div className="error-message">Došlo k chybě: {error.message}</div>
      )}

      {/* Pokud je showDropdown true, zobrazí komponentu Suggestion. */}
      {showDropdown && (
        <Suggestion handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};
