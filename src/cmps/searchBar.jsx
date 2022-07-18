import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar=(props)=>{
    const {string} = props
    const navigate = useNavigate()
    const [search, setSearch] = useState(string ||'')

    useEffect(()=>{
    })

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
            <input value={search} autoFocus onChange={(ev)=> handleFormChange(ev)} className="search-input" type="text" placeholder="write an example text here" />
            {!string  && <button className="search-btn btn">Search</button>}
        </label>
        </form></div>
    )
}