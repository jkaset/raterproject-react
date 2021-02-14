import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameDetail } from "./game/GameDetail.js"
import { GameForm } from "./game/GameForm.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={props => <GameList {...props} />} />

                <Route exact path="/games/:gameId(\d+)" render={props => <GameDetail {...props}
                />} />

                <Route exact path="/games/new" render={
                    props => <GameForm {...props} />}
                />

            </GameProvider>
        </main>
    </>
}


