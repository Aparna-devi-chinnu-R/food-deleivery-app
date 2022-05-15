import styles from './CartItemStyles';
import {useDispatch} from "react-redux";
import {decrementCount, incrementCount} from "../../redux/reducer/mealInCartReducer";

const CartItem = ({item}) => {
    const classes = styles();
    let dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCount(item));
    }

    const handleDecrement = () => {
        dispatch(decrementCount(item));
    }
    return (
        <div className={classes.cartItem}>
            <div style={{fontWeight: "bold", display: "flex", justifyContent: "space-between"}}>
                <div>{item.name}</div>
                <div className={classes.cartButtonBox}>
                    <button className={classes.cartButton} onClick={handleIncrement} disabled={item.count>=5}>+</button>
                    <button className={classes.cartButton} onClick={handleDecrement} disabled={item.count<=0}>-</button>
                </div>
            </div>
            <div style={{display: "flex"}}>
                <div style={{color: "darkred"}}>Rs : {item.price}</div>
                <div className={classes.count}>x{item.count}</div>
            </div>
        </div>
    )
}

export default CartItem;