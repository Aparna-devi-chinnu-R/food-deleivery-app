import styles from './CartItemStyles';

const CartItem = ({item}) => {
    const classes = styles();
    return (
        <div className={classes.cartItem}>
            <div style={{fontWeight: "bold", display: "flex", justifyContent: "space-between"}}>
                <div>{item.name}</div>
                <div className={classes.cartButtonBox}>
                    <div className={classes.cartButton}>+</div>
                    <div className={classes.cartButton}>-</div>
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