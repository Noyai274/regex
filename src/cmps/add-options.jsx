import { useState } from "react"

export const AddOptions =({pos, onCloseModal})=>{

    const [settings, setSettings] = useState([])

    const onToggleOption = (ev) => {
       const opt = (ev.target.value)
       const isInArr = settings.indexOf(opt)
        if (isInArr !== -1) {
            let settingCopy = JSON.parse(JSON.stringify(settings))
            settingCopy.splice(isInArr, 1)
            setSettings(settingCopy)
        }
        else setSettings(prevSet=> [...prevSet, opt])
    }

    const onSubmitAdditions= (ev) => {
        ev.preventDefault()
        console.log(settings)
        setSettings([])
        onCloseModal()
    }
    return(
     <section style={{top: pos.y, left: pos.x}} className="add-options">
     <form className="options-container flex" onSubmit={(ev)=>onSubmitAdditions(ev)}>
        <label htmlFor="incase-sensitive">
            Incase Sensitive
            <input onChange={(ev) => onToggleOption(ev)} name="incase-sensitive" type="checkbox" value="incase-sensitive"/>
        </label>
        <label htmlFor="allow-numbers">
            Allow numbers
            <input onChange={(ev) => onToggleOption(ev)} name="allow-numbers" type="checkbox" value="allow-numbers"/>
        </label>
        <label htmlFor="allow-all-keys">
            Allow all keys
            <input onChange={(ev) => onToggleOption(ev)} name="allow-all-keys" type="checkbox" value="allow-all-keys"/>
        </label>
        <label htmlFor="specific-letters">
            Specific letters
            <input onChange={(ev) => onToggleOption(ev)} name="specific-letters" type="checkbox" value="specific-letters"/>
        </label>
        <label htmlFor="min-letters">
            min-let
            <input onChange={(ev) => onToggleOption(ev)} type="range" min="1" max="50" name="min-letters" value="3"/>
        </label>
        <label htmlFor="max-letters">
           max-let
            <input onChange={(ev) => onToggleOption(ev)} type="range" min="1" max="50" name="max-letters" value="3"/>
        </label>
        <button className="submit-btn btn">submit</button>
    </form>
     </section>
    )
}