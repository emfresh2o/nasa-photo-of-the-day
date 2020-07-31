import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="home">
            <Link className="home-link" to="/photo">Look Up In The Sky!</Link>
        </div>
    )
}
export default Home