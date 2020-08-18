import React,{ useState } from 'react';
import './index.css';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const App = () => {
    const[categories,setCategories] = useState('goku')
    return (
        <>
        <div className="section1">
              <h2>Buscador Gifs</h2>
              <AddCategory cat ={setCategories}/>
          </div>
          <div className="section2">
              <p className="txt_title">{categories}</p>
              <GifGrid category ={categories} />
          </div>
        </>
    )
  
}

export default App;
