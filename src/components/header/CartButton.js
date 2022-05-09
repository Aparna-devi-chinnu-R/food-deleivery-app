import {ShoppingCart} from "@material-ui/icons";
import {Button} from "@material-ui/core";

const CartButton = () => {
    return (
        <>
            <Button style={{
                cursor: "pointer",
                font: "inherit",
                border: "none",
                backgroundColor: "#4d1601",
                color: "white",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "25px",
                fontWeight: "bold",
                width: "15%"
            }}>
                    <span>
                        <ShoppingCart/>
                    </span>
                <span>
                        Your cart
                    </span>
                <span style={{
                    backgroundColor: "darkred",
                    borderRadius: "5px",
                    width: "40px",
                    height: "25px",
                    verticalAlign: "center"
                }}>
                        3
                    </span>
            </Button>

        </>
    )
}

export default CartButton;