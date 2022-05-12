import {ShoppingCart} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import styles from "./CartButtonStyles"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const CartButton = ({handleCartButtonClick}) => {
    const mealsInCartList = useSelector(state => state.mealInCart);
    let [totalItemsInCart, setTotalItemsInCart] = useState(0);

    useEffect(() => {
        setTotalItemsInCart(mealsInCartList.reduce((accumulator, item) => {
                return accumulator + parseInt(item.count);
            }, 0)
        )
    }, [mealsInCartList])

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
                    {totalItemsInCart}
                </span>
            </Button>

        </>
    )
}

export default CartButton;