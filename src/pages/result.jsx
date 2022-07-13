import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { regexService } from '../services/regex.service'
import { SearchBar } from "../cmps/searchBar"
import { Logo } from "../cmps/logo"

export const ResultPage = () => {
    const navigate = useNavigate()
    let { string } = useParams()

    const [trans, setTrans] = useState('')
    const [allowNums, setAllowNums] = useState(false)
    const [incaseSensitive, setIncaseSensitive] = useState(false)

    useEffect(() => {
        const translation = regexService.translate(string)
        setTrans(translation)
    }, [])


    const onGoToHome = () => {
        navigate(`/`)
    }
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

    return (
        <div className="container">
            <div className="flex align-center space-between">
                <span className="result-logo" onClick={onGoToHome}><Logo /></span>
                <SearchBar />
            </div>
            <h1>Regex for <span>{string}</span></h1>
            <form onSubmit={(ev)=>onSubmitAdditions(ev)}>
                <label htmlFor="incase-sensitive">
                    Incase Sensitive
                    <input onChange={(ev) => onToggleOption(ev)} name="incase-sensitive" type="checkbox" value="incase-sensitive"/>
                </label>
                <label htmlFor="allow-numbers">
                    Allow numbers
                    <input onChange={(ev) => onToggleOption(ev)} name="allow-numbers" type="checkbox" value="allow-numbers"/>
                </label>
                <button>submit</button>
            </form>
            <h2>{trans}</h2>
        </div>
    )
}