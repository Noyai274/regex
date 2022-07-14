import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar=()=>{

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleFormChange = ev =>{
        const {value} = ev.target
        setSearch(value)
    }

    const onSearch=()=>{
        if (!search) return
        navigate(`/result/${search}`)
    }

    return(
        <div>
            <form onSubmit={onSearch}>
        <label htmlFor="text">
            <input autoFocus onChange={(ev)=> handleFormChange(ev)} className="search-input" type="text" placeholder="write an example text here" />
            {/* <button className="search-btn btn">Search</button> */}
        </label>
        </form></div>
    )
}