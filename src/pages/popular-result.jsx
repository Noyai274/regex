import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Exp } from "../cmps/exp"
import { Logo } from "../cmps/logo"
import { SearchBar } from "../cmps/searchBar"
import { regexService } from "../services/regex.service"

export const PopularResultPage=()=>{
    const navigate = useNavigate()
    const { string } = useParams()
    const [trans, setTrans]  = useState([])

    useEffect(() => {
        // getExample()
        const translation = regexService.translatePopular(string)
        setTrans(translation)
    }, [string])

    const getExample=()=>{
        switch(string){
            case 'Email':
                return 'example@example.com'
            case 'Password':
                return 'password1234'
            case 'Phone number':
                return '+1 (801)-954-2345'
            case 'Date':
                return '31/10/1995'
            case 'Website':
                return 'www.noya.codes.com'
            case 'ip address':
                return '341.286.142.130'
            default:
                return ''
            }
    }

    return(
        <div className="container">
            <div className="flex align-center space-between">
                <span className="result-logo" onClick={()=>navigate(`/`)}><Logo /></span>
                <SearchBar string={()=>getExample()} />
            </div>
            <h1>Regex for <span>{string}</span></h1>
            <h2>{trans.length > 0 && trans.map((part, idx) => {
                return <span className="trans-part" key={idx}>{part}</span>
            })}</h2>
            {trans.length > 0 && <Exp trans={trans} />}
        </div>
    )
}