import React from 'react'

const GifCard = ({ title, url }) => {
    return (
        <div className="card">
                <div className="card-img">
                <img src={url} alt ={title} />
                </div>
                <div className="card-content">
                   <p>{title}</p>
                </div>
            </div>
    )
}

export default GifCard