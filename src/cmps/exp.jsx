import { useEffect, useState } from "react"
import { expService } from "../services/exp.service"
import { onlyUnique } from "../services/util.service"

export const Exp =(props)=>{
    const {trans} = props
    const [filteredTrans, setFilteredTrans] = useState([])

    useEffect(()=>{
        if (trans.length > 0){
            setFilteredTrans(trans.filter(onlyUnique))
        } else setFilteredTrans(trans)
    },[trans])

    const onGetExp=(exp)=>{
        return expService.getExp(exp)
    }

    return(
        <div>
            <h1> What does in mean?</h1>
            <ul>
                {filteredTrans.length > 0  && filteredTrans.map((exp, idx)=>
                {return<li key={idx}>{exp} {onGetExp(exp)}</li>})}
            </ul>
        </div>
    )
}