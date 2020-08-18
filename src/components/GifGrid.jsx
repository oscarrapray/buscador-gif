import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GifCard from './GifCard'

const GifGrid = ({category}) =>{
    const[images, setImages] = useState({})

    useEffect(() =>{
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=1tmtPNz0WRpGmNIFLXbj9kLhksv4zfSO`)
        .then(resp => setImages(resp.data))
    },[])
    console.log(images)
    return(
        <div className="card_container">
            {
                images.length === 0 ?
                <h1>Cargando ...</h1>
                :
                (
                    images.map(image =>(<GifCard 
                        key = {image.id}
                        id = {image.id}
                        title = {image.title}
                        url = {image.images.downsized_medium.url}
                     />))
                )
            }
        </div>
    )
}

export default GifGrid