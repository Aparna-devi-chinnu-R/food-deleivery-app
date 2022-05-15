import {Button, Modal} from "@material-ui/core";
import {useSelector} from "react-redux";
import styles from "./CartModalStyles";
import CartItem from "./CartItem";
import {useEffect, useRef} from "react";

const CartModal = ({isCartOpen, handleCancel, handleOrder}) => {


    const classes = styles();
    const listOfMealsInCart = useSelector(store => store.mealInCart);
    let totalRupeesInCartRef = useRef();

    useEffect(() => {
        if (listOfMealsInCart.length !== 0) {
            totalRupeesInCartRef.current = listOfMealsInCart.reduce((accumulator, value) => {
                return accumulator + (parseInt(value.price) * parseInt(value.count));
            }, 0)
        } else {
            totalRupeesInCartRef.current = 0;
        }
    }, [listOfMealsInCart])

    return (
        <>
            <Modal id={"modal"} open={isCartOpen}
                   aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"

            >
                <div id={"major div"} className={classes.cartModal}>
                    <div id={"minor div"}>
                        {listOfMealsInCart.map((item, index) =>
                            <CartItem key={index} item={item}/>
                        )}
                    </div>

                    <div style={{
                        fontWeight: "bold",
                        display: "flex",
                        padding: "30px"
                    }}>
                        <div style={{marginLeft: "20px"}}>Total price :</div>
                        <div style={{marginLeft: "230px"}}>Rs : {totalRupeesInCartRef.current}</div>

                    </div>
                    <div style={{textJustify: "space-between", textAlign: "end"}}>
                        <Button className={classes.cancelButton} onClick={handleCancel}>Cancel</Button>
                        <Button className={classes.orderButton} onClick={handleOrder}>Order</Button>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default CartModal;