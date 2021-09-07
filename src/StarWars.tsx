import React, {useState, useEffect} from "react";
import Search from "./Search";
import axios from "axios";
import { gql, useQuery } from '@apollo/client';

const BASE_URL = 'https://swapi.dev/api/';


interface people  {
  name:string,
  gender: string,
  height: number,
  mass: number
}

interface peopleData {
  people:people[]
}

interface Data {
  // name: string,
  // title: string
  allPeople:peopleData
}

const baseQuery ={ 
  people: gql`query {
    allPeople{
      people{
        name  
        gender
        height
        mass
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

  // const [result, setresult] = useState<Data[]>([]);
  const [ queryString, setQueryString] = useState<string>("")

  const {loading , error, data } = useQuery<Data, peopleData>(  baseQuery["people"]  );
  
  async function handleSearch(term: string) {
    setQueryString(term)
  }
  

  if (loading || error || !data) { return <div>Loading…</div> }

  console.log(data?.allPeople?.people)
  return (

    <div>
   
      <Search handleSearch={handleSearch} />

      <ul>
        {data?.allPeople?.people.map( p =>( <div>
              {p?.name}: {p?.gender}, {p?.height} {p?.mass}
 </div>)) } 
        {/* {result.map(r => r.name
          ? <li>r.name</li> 
          : <li>r.title</li>)} */}
          
      </ul>
    </div>
  )
}

export default StarWars;