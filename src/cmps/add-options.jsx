import { useEffect, useState } from "react"

export const AddOptions = ({ part, pos, setModal, onAddOptions }) => {
    const initialSettings = {
        allowNumbers: false,
        incaseSensitive: false,
        allowAllKeys: false,
        // specificLetters: false,
        maxLetters: false,
    }
    const [settings, setSettings] = useState(initialSettings)

    useEffect(() => {
        console.log('got ', part)
        if (part.includes('a-z') && part.includes('A-Z')) {
            console.log('it does! incaseSensitive')
            setSettings(prevSetting=>({...prevSetting, incaseSensitive: true}))
        }
        if (part.includes('0-9')) {
            console.log('it does! allowNumbers')
            setSettings(prevSetting=>({...prevSetting, allowNumbers: true}))
        }
        
    }, [])
    
    const onToggleOption = (target) => {
        const { checked, name } = target
        setSettings(prevSetting=>({...prevSetting, [name]: checked}))
    }

    const onSubmitAdditions = (ev) => {
        ev.preventDefault()
        onAddOptions(settings)
        setModal(false)
    }
    return (
        <section style={{ top: pos.y, left: pos.x }} className="add-options">
            <form className="options-container flex" onSubmit={(ev) => onSubmitAdditions(ev)}>
                <label htmlFor="incaseSensitive">
                    Incase Sensitive
                    <input onChange={(ev) => onToggleOption(ev.target)} name="incaseSensitive" type="checkbox" checked={settings.incaseSensitive}/>
                </label>
                <label htmlFor="allowNumbers">
                    Allow numbers
                    <input onChange={(ev) => onToggleOption(ev.target)} name="allowNumbers" type="checkbox" checked={settings.allowNumbers}/>
                </label>
                <label htmlFor="allowAllKeys">
                    Allow all keys
                    <input onChange={(ev) => onToggleOption(ev.target)} name="allowAllKeys" type="checkbox" checked={settings.allowAllKeys}/>
                </label>
                {/* <label htmlFor="specificLetters">
            Specific letters
            <input onChange={(ev) => onToggleOption(ev)} name="specificLetters" type="checkbox" value={!settings.specificLetters ? true : false} />
        </label> */}
                <label htmlFor="maxLetters">
                    maximal key amount
                    <input onChange={(ev) => onToggleOption(ev.target)} type="number" name="maxeLetters" />
                </label>
                <button className="submit-btn btn">submit</button>
            </form>
        </section>
    )
}