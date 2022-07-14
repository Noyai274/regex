import { useState } from "react"

export const AddOptions =()=>{

    const [allowNums, setAllowNums] = useState(false)
    const [incaseSensitive, setIncaseSensitive] = useState(false)

    const onToggleOption = (ev) => {
        switch (ev.target.name) {
            case 'incase-sensitive':
                setIncaseSensitive(!incaseSensitive)
                break;
            case 'allow-numbers':
                setAllowNums(!allowNums)
                break;
            default: return
        }
    }

    const onSubmitAdditions= (ev) => {
        ev.preventDefault()
        console.log(ev)
    }
    return(
        <form className="options-container flex" onSubmit={(ev)=>onSubmitAdditions(ev)}>
        <label htmlFor="incase-sensitive">
            Incase Sensitive
            <input onChange={(ev) => onToggleOption(ev)} name="incase-sensitive" type="checkbox" value="incase-sensitive"/>
        </label>
        <label htmlFor="allow-numbers">
            Allow numbers
            <input onChange={(ev) => onToggleOption(ev)} name="allow-numbers" type="checkbox" value="allow-numbers"/>
        </label>
        <label htmlFor="specific-letters">
            Specific letters
            <input onChange={(ev) => onToggleOption(ev)} name="specific-letters" type="checkbox" value="specific-letters"/>
        </label>
        <label htmlFor="min-letters">
            <input type="range" min="1" max="50" name="min-letters" value="3"/>
        </label>
        <label htmlFor="max-letters">
            <input type="range" min="1" max="50" name="max-letters" value="3"/>
        </label>
        <button className="submit-btn btn">submit</button>
    </form>
    )
}