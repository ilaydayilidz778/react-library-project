import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import '../assets/styles/search.scss';

const Search = ({ setArananKelime }) => {
    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form>
                        <h1>BookHub</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor deserunt reiciendis eius sit esse, corporis alias neque, amet id ipsa adipisci eum quos, numquam modi fuga quibusdam cupiditate! Harum tempora eum obcaecati? Neque, quaerat perferendis est quia ut soluta tempore dolore commodi fugiat itaque! Nihil esse vel sed laborum nesciunt?</p>
                        <div className='search-form-elem'>
                            <input
                                type="search"
                                className='form-control'
                                placeholder='Search..'
                                onChange={e => setArananKelime(e.target.value)}
                            />
                            <span className='search-btn'>
                                <FaSearch className='search-btn-icon' size={24} />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
