import styles from "./HeaderStyles"
import CartButton from "./CartButton";
import {useState} from "react";
import CartModal from "../cart/CartModal";

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
            <CartModal isOpen={isCartButtonClicked}/>
        </>
    );
}

export default HeaderComponent;