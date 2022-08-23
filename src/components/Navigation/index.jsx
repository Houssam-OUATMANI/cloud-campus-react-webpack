
import React from "react";
import {Link} from 'react-router-dom'
const Navigation = () => {
    return(
        <nav>
            <h1>Mon beau site</h1>
            <ul>
                <li><Link to="/">Page principale</Link></li>
                <li><Link to="/contact">Page contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation