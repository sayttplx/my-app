import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <section>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/candyshop">Shop</Link>
                </li>
            </ul>
        </section>
     );
}
 
export default NavBar;