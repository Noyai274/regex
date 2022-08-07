import { useEffect, useState } from "react"

export const AddOptions =({part, pos, setModal, onAddOptions})=>{
    const initialSettings = {
        allowNumbers: false,
        incaseSensitive: false,
        allowAllKeys:false,
        // specificLetters: false,
        maxLetters: false,
    }
    const [settings, setSettings] = useState(initialSettings)

    useEffect(()=>{
        if (part.includes('a-zA-Z')) console.log('it does!')
        // setSettings({...settings, incaseSensitive:true})
        console.log(settings)
    },[])
    
    const onToggleOption = (target) => {
       const {value, name} = target
       const settingCopy = JSON.parse(JSON.stringify(settings))
       settingCopy[name] = value 
       setSettings(settingCopy)
    }

    const onSubmitAdditions= (ev) => {
        ev.preventDefault()
        console.log(settings)
        onAddOptions(settings)
        setModal(false)
    }
    return(
     <section style={{top: pos.y, left: pos.x}} className="add-options">
     <form className="options-container flex" onSubmit={(ev)=>onSubmitAdditions(ev)}>
        <label htmlFor="incaseSensitive">
            Incase Sensitive
            <input onChange={(ev) => onToggleOption(ev.target)} name="incaseSensitive" type="checkbox" value={!settings.incaseSensitive ? true : false} />
        </label>
        <label htmlFor="allowNumbers">
            Allow numbers
            <input onChange={(ev) => onToggleOption(ev.target)} name="allowNumbers" type="checkbox" value={!settings.allowNumbers ? true : false} />
        </label>
        <label htmlFor="allowAllKeys">
            Allow all keys
            <input onChange={(ev) => onToggleOption(ev.target)} name="allowAllKeys" type="checkbox" value={!settings.allowAllKeys ? true : false} />
        </label>
        {/* <label htmlFor="specificLetters">
            Specific letters
            <input onChange={(ev) => onToggleOption(ev)} name="specificLetters" type="checkbox" value={!settings.specificLetters ? true : false} />
        </label> */}
        <label htmlFor="maxLetters">
           maximal key amount
            <input onChange={(ev) => onToggleOption(ev.target)} type="number" name="maxeLetters"/>
        </label>
        <button className="submit-btn btn">submit</button>
    </form>
     </section>
    )
}