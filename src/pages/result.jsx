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
    const [modal, setModal] = useState(false)
    const [trans, setTrans] = useState('')


    useEffect(() => {
        const translation = regexService.translate(string)
        setTrans(translation)
    }, [string])
    
    const onToggleModal = (ev,idx) => {
        if (!modal || modal.idx !== idx) {
            setModal({ x: ev.clientX+5 + "px", y: ev.clientY+5 + "px", idx, })
        }
        else setModal(false)
    }
    
    const onAddOptions=(options)=>{
        const translation = regexService.addOptions(trans, options)
        // setTrans(translation)
    }

    return (
        <div className="container">
            <div className="flex align-center space-between">
                <span className="result-logo" onClick={()=>navigate(`/`)}><Logo /></span>
                <SearchBar string={string} />
            </div>
            <h1>Regex for <span>{string}</span></h1>
            <h2>{trans.length && trans.map((part, idx) => {
                return <span title="Click to expand" onClick={(ev) => onToggleModal(ev, idx)} className="trans-part" key={idx}>{part}</span>
            })}</h2>
            {trans.length && trans.map((part,idx)=>{
                return <span key={idx}>{modal && <AddOptions onAddOptions={onAddOptions} key={idx} part={part} setModal={setModal} pos={modal} />}</span>
            })}
            <Exp trans={trans} />
        </div>
    )
}