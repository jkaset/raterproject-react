import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import Game from "./Game"
import { Link } from "react-router-dom"
export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
      <>

      <div style={{ marginTop: "2rem"}}>
            <button onClick={() => props.history.push("/games/new")}>
                Make Game
            </button>
            <div className="games">
                {
                    games.map(game => <Game key={game.id} game={game} />)
                }
            </div>
        </div>

        {/* <article className="games">
            { 
                games.map(g => {
                    return <section key={`game--${g.id}`} className="game"> 
                        <div className="game__title">{g.title}</div>
                        
                    </section>
                })
              
            }

        
        </article> */}

        </> )}

 {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            props.history.push({ pathname: "/games/new" })
        }}
        >Register New Game</button> */}