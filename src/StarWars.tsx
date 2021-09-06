import React, {useState} from "react";
import Search from "./Search";
import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/';

interface Data {
  name: string,
  title: string
}

function StarWars() {

  const [data, setData] = useState<Data[]>([]);

  async function handleSearch(term: string) {
    const response = await axios(`${BASE_URL}/${term}`);
    const {results} = response.data;
    setData(results);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <ul>
        {data.map(d => d.name
          ? <li>d.name</li> 
          : <li>d.title</li>)}
      </ul>
    </div>
  )
}

export default StarWars;