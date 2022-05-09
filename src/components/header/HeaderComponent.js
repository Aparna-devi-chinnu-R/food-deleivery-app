import styles from "./HeaderStyles"
import {Fragment, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import CartButton from "./CartButton";

const HeaderComponent = () => {
    const classes = styles();
    return (
        <>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
                <CartButton/>
            </header>
        </>
    );
}

export default HeaderComponent;