import {mealItemsList} from "./MealItemsList";
import MealCard from "./MealCard";
import styles from "./AvailableMealStyles"

const AvailableMeals = () => {

    const classes = styles();

    return (
        <>
            <div className={classes.mealCard}>
                {mealItemsList.map(mealItem =>
                    <MealCard mealItem={mealItem}/>
                )}
            </div>
        </>
    )
}

export default AvailableMeals;