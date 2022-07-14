export const Exp =(props)=>{
    const {trans} = props
    return(
        <div>
            <h1> What does in mean?</h1>
            <ul>
                {trans.map((exp, idx)=>
                {return<li key={idx}>{exp}</li>})}
            </ul>
        </div>
    )
}