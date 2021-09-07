import React, {useState, useEffect} from "react";
import Search from "./Search";
import axios from "axios";
import { gql, useQuery } from '@apollo/client';

const BASE_URL = 'https://swapi.dev/api/';

interface Data {
  name: string,
  title: string
}

interface people  {
  name:string,
  gender: string,
  weight: number,
  mass: number
}

interface peopleData {
  people:people[]
}

const baseQuery ={ 
  people: gql`query {
    allPeople{
      people{
        name  
      }
    }
  }
  `,
  films: gql`query{
    allFilms{
      films{
        title
      }
    }
  }`
}
function StarWars() {

  const [result, setresult] = useState<Data[]>([]);
  const [ queryString, setQueryString] = useState<string>("")

  const {loading , error, data } = useQuery<people, peopleData>(  baseQuery["people"]  );
  
  console.log( 
    data
  )
  async function handleSearch(term: string) {
    setQueryString(term)
  }
  
  if( loading === false ){ console.log( data) }


  return (

    <div>
   
      <Search handleSearch={handleSearch} />

      <ul>
        {/* {result.map(r => r.name
          ? <li>r.name</li> 
          : <li>r.title</li>)} */}
          
      </ul>
    </div>
  )
}

export default StarWars;