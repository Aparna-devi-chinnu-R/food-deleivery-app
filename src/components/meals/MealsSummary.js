import styles from "./MealSummaryStyles";
const MealsSummary = () => {
    const classes = styles();
    return (
        <>
            <div className={classes.mealSummary}>
                <h3>Welcome to Food foods!!!!</h3> <br/>
                You can choose from the below meal and pay for the meal. Happy eat!!!
            </div>
        </>
    )
}

export default MealsSummary;