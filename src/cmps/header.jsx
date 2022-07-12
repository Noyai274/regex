import React from "react"
import { Link } from "react-router-dom"
import logoImg from '../assets/img/translating64x64.png'

export const Header=()=>{

    

    return(
        <div className="header-container" hidden >
            <div className="container flex center">
            <Link to="/"><img className="logo-img" src={logoImg} alt="" /></Link>
            </div>
        </div>
    )
}