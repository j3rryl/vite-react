import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "./authSlice";
import { selectCurrentToken } from "./authSlice";

import React from 'react'

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    
    const token = useSelector(selectCurrentToken)
    const welcome = user ? `Welcome ${user}!`:'Welcome'
    const tokenAbbr = `${token.slice(0,9)}`
    const content  =(
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token:{tokenAbbr}</p>
            <p><Link to="/userslist">Go to user's list</Link></p>
        </section>
    )
  return content
}

export default Welcome