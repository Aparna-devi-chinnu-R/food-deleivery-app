import styles from "./HeaderStyles"
import {Fragment} from "react";

const HeaderComponent = () => {
    const classes = styles();
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
            </header>
        </Fragment>
    );
}

export default HeaderComponent;