import foodImage from "../asserts/istockphoto-1175505781-612x612.webp";

const FoodImage = () => {
    return (
        <>
            <div>
                <img src={foodImage} alt="Tasty Food image !!" style={{width: "100%",
                    height: "25rem",
                    zIndex: "0",
                    overflow: "hidden"}}/>
            </div>
        </>
    )
}

export default FoodImage;