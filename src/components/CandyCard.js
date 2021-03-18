const CandyCard = (props) => {
    return ( 
        <section>
            <img height="200" width="200" src={"./svg/" + props.candy.id + ".svg"} alt={props.candy.title}/>
            <h3>{props.candy.title}</h3>
        </section>
     );
}
 
export default CandyCard ;