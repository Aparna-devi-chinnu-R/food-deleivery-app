import {ShoppingCart} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import styles from "./CartButtonStyles"

const CartButton = () => {
    const classes = styles();
    return (
        <>
            <Button className={classes.button}>
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