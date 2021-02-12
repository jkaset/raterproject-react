import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
  const [ games, setGames ] = useState([])

    const getGames = () => {
      console.log(games)
        return fetch("http://localhost:8000/games", {
          method: "GET",  
          headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const createGame = (game) => {
      return fetch("http://localhost:8000/games", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }, 
          body: JSON.stringify(game)
        })
        
          .then(getGames)
          
    } 
  
    // const getGameById = (id) => {
    //   return fetch(`http://localhost:8000/games/${id}`)
    //       .then(res => res.json())
         
    // } 

    const getGameById = (id) => {
        return fetch(`http://localhost:8000/games/${id}`, {
          method: "GET",  
          headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            
    }
    

    return (
        <GameContext.Provider value={{ games, getGames, createGame, getGameById}} >
            { props.children }
        </GameContext.Provider>
    )
}