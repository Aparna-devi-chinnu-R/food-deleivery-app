import foodImage from "../asserts/istockphoto-1175505781-612x612.webp";
import styles from "./FoodImgaeStyles"

const FoodImage = () => {

    const classes = styles();
    return (
        <>
            <img src={foodImage} alt="Tasty Food image !!" className={classes.image}/>
        </>
    )
}

export default FoodImage;