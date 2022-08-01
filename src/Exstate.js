import {React,useState} from 'react'
const Exstate=()=>{
    const [value,setValue]=useState(0)
    const handle=()=>{
        setValue(value+1)
    }
return(
<>
<div>
    <button onClick={handle}>Increment</button>
    <h1>Value is:{value}</h1>
</div>
</>
)
}
export default Exstate