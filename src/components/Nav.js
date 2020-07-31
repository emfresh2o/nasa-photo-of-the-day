import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="navbar">
            <ul>
                <Link className="link" to="/">ET Phone Home!</Link>
            </ul>
        </div>
    )
}
export default Nav