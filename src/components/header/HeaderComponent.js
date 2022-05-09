import styles from "./HeaderStyles"
import {Fragment, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';

const HeaderComponent = () => {
    const [itemCount, setItemCount] = useState(0);
    const classes = styles();
    return (
        <>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
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
                    width:"15%"
                }}>
                    <span >
                        <ShoppingCart/>
                    </span>
                    <span >
                        Your cart
                    </span>
                    <span style={{backgroundColor:"darkred",borderRadius:"5px",width:"40px",height:"25px",verticalAlign:"center"}}>
                        {itemCount}
                    </span>
                </Button>
            </header>
        </>
    );
}

export default HeaderComponent;