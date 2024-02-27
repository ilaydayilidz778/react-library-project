import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../assets/styles/search.scss';

const Search = () => {
    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form>
                        <div className='search-form-elem'>
                            <input type="search" className='form-control' placeholder='Search..' />
                            <button type="submit" className='search-btn'>
                                <FaSearch className='search-btn-icon' size={14} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;
