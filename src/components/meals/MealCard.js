import {useDispatch} from "react-redux";
import {addMeal} from "../../redux/reducer/mealInCartReducer";
import {useState} from "react";

const MealCard = ({mealItem}) => {
    let dispatch = useDispatch();
    const [amount,setAmount] = useState(1);

    const addItemToCart = () => {
        dispatch(addMeal({...mealItem,count:amount}));
    }

    const handleAmountChange = (event) => {
         if(event.target.value >0 && event.target.value<=5) {
             setAmount(event.target.value);
         }
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
                        Amount <input type="number" min="1" max="5" style={{size:"10px",marginLeft:"5px"}} onChange={handleAmountChange} value={amount}/>
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