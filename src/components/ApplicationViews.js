import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameDetail } from "./game/GameDetail.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
            <Route exact path="/" render={props => <GameList {...props} />} />

            <Route exact path="/games/:id(\d+)" render={props => <GameDetail {...props} 
            />} />
                
            </GameProvider>
        </main>
    </>
}


