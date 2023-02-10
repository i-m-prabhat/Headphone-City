import React from "react";
import {MdClose} from "react-icons/md"
import Prod from "../../../assets/products/watch-prod-1.webp"

import "./Search.scss";
const Search = ({setShowSearch}) => {
    return <div className="search-modal">
        <div className="form-field">
            <input 
            type="text"
            autoFocus
            placeholder="Search for Products" />
            <MdClose onClick={()=>setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={Prod} alt="product img" />
                    </div>
                    <div className="prod-details">
                        <span className="name">Product name</span>
                        <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet odio, unde cum quibusdam necessitatibus! Corporis facilis, quidem fuga recusandae eveniet officia soluta omnis et sint deserunt cupiditate corrupti expedita.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
