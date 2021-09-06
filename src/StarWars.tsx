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

const baseQuery = 
  gql`query allPeople{
    people{
      name  
      gender
      weight
      mass
    }
  }
  `

  
function StarWars() {

  const [result, setresult] = useState<Data[]>([]);
  const [ queryString, setQueryString] = useState<string>("")

  const {loading , error, data } = useQuery<people, peopleData>(baseQuery);
  
  console.log( 
    loading, "ISLOADING\n",
    data
  )
  async function handleSearch(term: string) {
    // const response = await axios(`${BASE_URL}/${term}`);
    // const {results} = response.data;
    //   const toyGQL = `
    //   query allPeople{
    //     people{
    //       name  
    //       weight
    //       mass
    //     }
    //   }
    // ` 

    // setQueryString(toyGQL)
  }



  return (

    <div>
   
      <Search handleSearch={handleSearch} />

      {/* <ul>
        {result.map(r => r.name
          ? <li>r.name</li> 
          : <li>r.title</li>)}
      </ul> */}
    </div>
  )
}

export default StarWars;