import { SearchBar } from "../cmps/searchBar"
import { Logo } from "../cmps/logo"

export const HomePage = () => {
    

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
                    <li>Email</li>
                    <li>Phone number</li>
                    <li>Website</li>
                    <li>Password</li>
                    <li>Date</li>
                    <li>ip address</li>
                </ul>
            </div>
        </div>
    )
}