import {useDispatch} from "react-redux";
import {addMeal} from "../../redux/reducer/mealInCartReducer";

const MealCard = ({mealItem}) => {
    let dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addMeal({...mealItem,count:1}));
    }

    return (
        <>
            <div style={{borderBottom: "0.5px solid grey", borderRadius: "20px", padding: "20px"}}>
                <div id="first-line" style={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "5px"
                }}>
                    <div>{mealItem.name}</div>
                    <div style={{display: "flex"}}>
                        Amount <div style={{border: "1px solid grey", marginLeft: "5px", marginBottom: "5px"}}>3</div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "5px"}}>
                    <div style={{fontStyle: "italic"}}>{mealItem.description}</div>
                    <button style={{backgroundColor: "darkred", borderRadius: "20px", width: "80px", color: "white"}}
                         onClick={addItemToCart}>+Add
                    </button>

                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "5px",
                    color: "darkred",
                    fontWeight: "bold"
                }}>
                    {mealItem.price}
                </div>
            </div>
        </>
    )
}

export default MealCard;