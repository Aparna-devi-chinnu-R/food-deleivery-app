import {Modal} from "@material-ui/core";
import {useSelector} from "react-redux";
import styles from "./CartModalStyles";

const CartModal = ({isOpen}) => {
    const classes = styles();
    const listOfMealsInCart = useSelector(store => store.mealInCart);
    return (
        <>
            <Modal open={isOpen} className={classes.cartModal}>
                <div>
                    {listOfMealsInCart.map(item =>
                        <div>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div>{item.count}</div>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default CartModal;