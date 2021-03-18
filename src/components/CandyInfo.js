import '../App.css';

const CandyInfo = (props) => {
    const candyData = props.location.state.data;
    return ( 
    <section className="candyinfo-container">
        <img height="400" width="400" src={"../svg/" + candyData.id + ".svg"} alt={candyData.title}/>
        <aside>
        <h1>{candyData.title}</h1>
        <h1>{candyData.desc}</h1>
        </aside>
    </section> );
}
 
export default CandyInfo;