"use client";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
    return (
        <div className="relative">
            <FaSearch color="C0C0C0" fontSize="20px" className="absolute top-[8px] left-[8px] " />
            <input style={{boxShadow:"0px 1px 4px 0px rgba(61, 61, 61, 25%)"}} 
            onChange={(e) => handleChange(e)} 
            value={searchValue} 
            placeholder="Search" 
            className="w-[300px] pl-[35px] pr-[15px] text-[black] outline-none text-[15px] font-medium h-[35px] rounded-[4px] " />
        </div>
    )
}

export default Search;