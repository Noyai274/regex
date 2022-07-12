export const HomePage = () => {
    return (
        <div>
            <h1>Regex Generator</h1>
            <p>Matched for your needs</p>
            <label htmlFor="text">
            write an example text here
            <input type="text" />
            </label>

            <h3>Most popular searches:</h3>
            <ul>
                <li>Email</li>
                <li>Phone number</li>
                <li>Website</li>
            </ul>
        </div>
    )
}