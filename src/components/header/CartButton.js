import {ShoppingCart} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import styles from "./CartButtonStyles"

const CartButton = ({handleCartButtonClick}) => {

    const classes = styles();
    return (
        <>
            <Button className={classes.button} onClick={handleCartButtonClick}>
                    <span>
                        <ShoppingCart/>
                    </span>
                <span>
                        Your cart
                    </span>
                <span className={classes.buttonCounter}>
                        3
                    </span>
            </Button>

        </>
    )
}

export default CartButton;