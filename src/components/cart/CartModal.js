import {Modal} from "@material-ui/core";
import {useSelector} from "react-redux";
import styles from "./CartModalStyles";
import CartItem from "./CartItem";

const CartModal = ({isOpen}) => {
    const classes = styles();
    const listOfMealsInCart = useSelector(store => store.mealInCart);
    return (
        <>
            <Modal open={isOpen} className={classes.cartModal}>
                <div>
                    {listOfMealsInCart.map(item =>
                        <CartItem item={item}/>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default CartModal;