import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import axios from 'axios';

function Photo() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        
    axios
        .get("https://api.nasa.gov/planetary/apod?start_date=2020-07-30&end_date=2020-07-30&api_key=NdvmpIA78eL0TBTYwaDS7Ll6DlkK8b2eB0IgzZKv")
        .then(response =>{
            console.log(response.data)
            setPhotoData(response.data[0]);
        })
        .catch(error => {
            console.log("What went wrong!", error)
    })
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <Nav />
            <div className="apod-photo">
                {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="photo" />
            ) : (
                <iframe title="space-video" src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className ="photo"
                />
            )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p classname="date">{photoData.date}</p>
                    <p classname="explanation">{photoData.explanation}</p>
                    <p classname="copyright">{photoData.copyright}</p>
                </div>
            </div>
        </>
    )
}
export default Photo