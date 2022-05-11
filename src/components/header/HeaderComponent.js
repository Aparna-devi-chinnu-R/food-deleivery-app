import styles from "./HeaderStyles"
import CartButton from "./CartButton";
import {useState} from "react";
import CartModal from "../cart/CartModal";
import ReactDOM from 'react-dom';

const HeaderComponent = () => {
    const classes = styles();
    const [isCartButtonClicked,setIsCartButtonClicked] = useState(false);

    const handleCartButtonClick = () => {
        console.log("inside")
        setIsCartButtonClicked(true);
    }
    return (
        <>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
                <CartButton handleCartButtonClick={handleCartButtonClick}/>
            </header>
            {ReactDOM.createPortal(<CartModal isOpen={isCartButtonClicked}/>,document.getElementById("cartModal"))}
        </>
    );
}

export default HeaderComponent;