import styles from "./HeaderStyles"
import CartButton from "./CartButton";
import {useState} from "react";
import CartModal from "../cart/CartModal";
import ReactDOM from 'react-dom';

const HeaderComponent = () => {
    const classes = styles();
    const [isCartButtonClicked,setIsCartButtonClicked] = useState(false);

    const handleCartButtonClick = () => {
        setIsCartButtonClicked(true);
    }

    const handleCancel = () => {
        setIsCartButtonClicked(false);
    }
    return (
        <>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
                <CartButton handleCartButtonClick={handleCartButtonClick}/>
            </header>
            {ReactDOM.createPortal(<CartModal isCartOpen={isCartButtonClicked} handleCancel={handleCancel}/>,document.getElementById("cartModal"))}
        </>
    );
}

export default HeaderComponent;