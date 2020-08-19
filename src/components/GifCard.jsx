import React from 'react'

const GifCard = ({ title, urlImg }) => {
    return (
        <div className="card">
                <div className="card-img">
                <img src={urlImg} alt ={title} />
                </div>
                <div className="card-content">
                   <p>{title}</p>
                </div>
            </div>
    )
}

export default GifCard