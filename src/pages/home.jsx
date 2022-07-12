export const HomePage = () => {
    return (
        <div classname="container">
            <div className="home-container">
               <h1 className="home-title"><span className="blue">G</span>
                <span className="red">e</span>
                <span className="yellow">n</span>
                <span className="blue">e</span>
                <span className="green">R</span>
                <span className="red">e</span>
                <span className="blue">g</span>
                <span className="red">e</span>
                <span className="yellow">x</span>
            </h1>
            <span>Matched for your needs</span>
            <label htmlFor="text">
            <input className="search-input" type="text" placeholder="write an example text here"/>
            </label>

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