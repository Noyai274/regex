import { SearchBar } from "../cmps/searchBar"
import { Logo } from "../cmps/logo"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    const mostPopular = ['Email','Phone number','Website','Password','Date','ip address']

    return (
        <div className="container">
            <div className="home-container">
                <h1 className="home-title">
                    <Logo/>
                </h1>
                <span>Matched for your needs</span>
                <SearchBar/>

                <h3>Most popular searches:</h3>
                <ul className="popular-container">
                    {mostPopular.map(item=>{
                        return <li onClick={()=>navigate(`/result/popular/${item}`)} key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}