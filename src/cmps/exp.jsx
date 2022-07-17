import { expService } from "../services/exp.service"

export const Exp =(props)=>{
    const {trans} = props

    const onGetExp=(exp)=>{
        return expService.getExp(exp)
    }

    return(
        <div>
            <h1> What does in mean?</h1>
            <ul>
                {trans.length && trans.map((exp, idx)=>
                {return<li key={idx}>{exp} = {onGetExp(exp)}</li>})}
            </ul>
        </div>
    )
}