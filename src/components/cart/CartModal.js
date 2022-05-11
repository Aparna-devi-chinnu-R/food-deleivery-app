import {Modal} from "@material-ui/core";
import {useSelector} from "react-redux";
import styles from "./CartModalStyles";
import CartItem from "./CartItem";

const CartModal = ({isOpen}) => {
    const classes = styles();
    const listOfMealsInCart = useSelector(store => store.mealInCart);
    return (
        <>
            <Modal open={isOpen}
                   className={classes.cartModal}
                   aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"
                   disableBackdropClick
            >
                <div style={{position: "absolute"}}>
                    {listOfMealsInCart.map((item,index) =>
                        <CartItem key={index} item={item}/>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default CartModal;