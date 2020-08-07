import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue && inputValue !== '') {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        } else {
            alert('ingresa una categoria');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={ inputValue } 
                onChange={handleInputChange}
                autoFocus
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
