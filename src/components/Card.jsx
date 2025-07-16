import "./Card.css";

function Card(props) {
    const classes = "card" + " " + props.className;         //we need to use this because className is not a reserved Keyword and hence is taken as a props property.
    return <div className={classes}>{props.children}</div>

}

export default Card;