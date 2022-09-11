import { useEffect, useState } from "react";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  
  console.log('render');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newfilterMonsters = monsters.filter((a) => {
      return a.name.toLocaleLowerCase().includes(searchField);
    });
    
    setFilterMonsters(newfilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roledex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className={`search-box`}
        placeholder={"Search Monster"}
      />
      <CardList monsters={filterMonsters} /> 
    </div>
  );
};
export default App;
