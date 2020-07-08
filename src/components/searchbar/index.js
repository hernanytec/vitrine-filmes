import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ onSubmitQuery }) {

    const handleSubmit = e => {
        e.preventDefault()
        onSubmitQuery(e.target[0].value)
    }

    return (
        <div className='search-container'>
            <form className="search-form" onSubmit={handleSubmit}>

                <input
                    autoFocus
                    placeholder="Buscar por título"
                />

                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}