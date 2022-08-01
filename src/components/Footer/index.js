import "./style.css";

const Footer= (props)=>{
    return(
<div class="footer">
    <h1>Footer</h1>
    <h2>{props.footname}</h2>
    <h3>{props.author}</h3>
        <h6>{props.lap}</h6>
</div>
    )
}
export default Footer;