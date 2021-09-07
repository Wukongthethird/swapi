import React, {useState, useEffect} from "react";
import Search from "./Search";
import { gql, useQuery } from '@apollo/client';



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

/**
 * 
 * ASK MATT WHY CANT I USE A VARIABLE TYPED STRING AS A KEY IN THE OBJECT
 * VARIABLES IN THE GQL SEARCH.
 */
function StarWars() {

  // const [result, setresult] = useState<Data[]>([]);
  const [ queryString, setQueryString] = useState<string>("")

  const {loading , error, data } = useQuery<Data>(  baseQuery["people"]  );
  
  async function handleSearch(term: string) {
    setQueryString(term)
  }
  

  if (loading || error || !data) { return <div>Loading…</div> }

  console.log(queryString , "I GOT PRINTED")

  return (

    <div>
   
      <Search handleSearch={handleSearch} />

      <ul>
        {data.allPeople.people.map( p =>( <div>
              {p.name}: {p.gender}, {p.height} {p.mass}
 </div>)) }          
      </ul>
    </div>
  )
}

export default StarWars;