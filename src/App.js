import React,{ useState } from 'react';
import './index.css';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const App = () => {
    const[categories,setCategories] = useState(['Hola'])
    return (
        <>
        <div className="section1">
              <h2>Buscador Gifs</h2>
              <AddCategory cat ={setCategories}/>
          </div>
              <ol>
                    {
                        categories.map(category  => (
                            <GifGrid
                                key={ category }
                                category={ category }
                            />
                        )
                        )
                    }
               </ol>  
        </>
    )
  
}

export default App;
