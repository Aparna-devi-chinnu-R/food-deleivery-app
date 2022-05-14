import {Modal} from "@material-ui/core";
import {useSelector} from "react-redux";
import styles from "./CartModalStyles";
import CartItem from "./CartItem";
import {useEffect, useRef} from "react";

const CartModal = ({isOpen}) => {
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
        console.log(totalRupeesInCartRef.current)
    }, [listOfMealsInCart])
    return (
        <>
            <Modal open={isOpen}
                   className={classes.cartModal}
            >
                <div >
                    <div>
                        {listOfMealsInCart.map((item, index) =>
                            <CartItem key={index} item={item}/>
                        )}
                    </div>

                    <div style={{
                        fontWeight: "bold",
                        display: "flex",
                    }}>
                        <div style={{marginLeft: "20px"}}>Total price :</div>
                        <div style={{marginLeft: "230px"}}>Rs : {totalRupeesInCartRef.current}</div>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default CartModal;