import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { regexService } from '../services/regex.service'
import { SearchBar } from "../cmps/searchBar"
import { Logo } from "../cmps/logo"
import { AddOptions } from "../cmps/add-options"
import { Exp } from "../cmps/exp"

export const ResultPage = () => {
    const navigate = useNavigate()
    let { string } = useParams()

    const [trans, setTrans] = useState('')


    useEffect(() => {
        const translation = regexService.translate(string)
        setTrans(translation)
    }, [string])


    const onGoToHome = () => {
        navigate(`/`)
    }


    return (
        <div className="container">
            <div className="flex align-center space-between">
                <span className="result-logo" onClick={onGoToHome}><Logo /></span>
                <SearchBar />
            </div>
            <h1>Regex for <span>{string}</span></h1>
            <h2>{trans}</h2>
            {/* <AddOptions/> */}
            <Exp trans={trans}/>
        </div>
    )
}