import "./style.css";

const Header= (props)=>{
   console.log(props)
    return(
    <div class="header">
        <h1>Header</h1>
        <h2>{props.headname}</h2>
        <h3>{props.author}</h3>
        <h6>{props.lap}</h6>
    </div>
   ) }
    export default Header;