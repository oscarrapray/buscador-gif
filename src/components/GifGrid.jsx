import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GifCard from './GifCard'

const GifGrid = ({category}) =>{
    const[images, setImages] = useState('')
    useEffect(() =>{
        console.log(category)
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=1tmtPNz0WRpGmNIFLXbj9kLhksv4zfSO`)
        .then(resp => setImages(resp.data))
    },[])  
    console.log(images) 
    return(
        <div className = "section2">
        <h3 className = "txt_title"> { category } </h3>
        <div className="card_container">
            {
                images.length===0 ?
                <h1>Cargando ...</h1>
                :
                ( 
                    images.data.map(image =>(
                        <GifCard 
                        key = {image.id}
                        title = {image.title}
                        urlImg = {image.images.fixed_height.url}
                     />
                    ))
                )
            }
        </div>
        </div>
    )
}
export default GifGrid