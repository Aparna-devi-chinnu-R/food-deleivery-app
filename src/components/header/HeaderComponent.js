import styles from "./HeaderStyles"
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