import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({cat}) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            cat( c => [inputValue, ...c,]  );
            setInputValue('');
        }

    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
            <div className="item1">
                <input type="text" value={ inputValue } onChange={ handleInputChange }/>
            </div>
            <div className="item2">
                <button className="btn_insert">Buscar</button>
            </div>
        </form>
        </>
    )
}


AddCategory.propTypes = {
    cat: PropTypes.func.isRequired
}