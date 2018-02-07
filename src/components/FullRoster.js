import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(data => (
                    <li key={data.number}>
                        <Link to={`/roster/${data.number}`}>{data.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullRoster
