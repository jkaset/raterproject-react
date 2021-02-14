import React from "react"
import { Link } from "react-router-dom"

export default ({ game }) => (
    <section className="game">
        <h3 className="game__name">
            <Link to={`/games/${game.id}`}>
                { game.title}
            </Link>
        </h3>
        
    </section>
)