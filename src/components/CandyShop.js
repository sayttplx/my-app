import candies from '../assets/candy.json'
import CandyCard from './CandyCard';
import '../App.css'; 

const CandyShop = () => {
    return (
        <section className="candy-shop-container">
            <h1>Gerts Godisbutik</h1>
            <img src="./svg/008-candy-machine.svg" height="400" width="400"/>
            <h3>Webbens bästa godisbutik</h3>
            <section className="candies-container">
                {
                    candies.map((candy, index) => <CandyCard key={index} candy={candy} />)
                }
            </section>
        </section>
    );
}

export default CandyShop;