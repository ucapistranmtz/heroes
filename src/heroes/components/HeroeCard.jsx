import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {

    return (alter_ego === characters) ? <></> : <p>{characters}</p>
}

export const HeroeCard = ({
    id,
    superhero,
    publisher,    
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroeImageUrl = `/assets/heroes/${id}.jpg`
    return (
        <div className='col '>
            <div className='row no-gutters'>
                <div className='col-4 '>
                    <img src={heroeImageUrl} className='card-img' alt={superhero}></img>
                </div>
                <div className="col-12">
                    <div className="card-body">
                        <h5 className='card-title'>{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <CharactersByHero characters={characters} alter_ego={alter_ego} />

                        <p className='card-text'>
                            <smal className='text-muted'>{first_appearance}</smal>
                        </p>
                        <Link to={`/heroe/${id}`}>
                            More info..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
