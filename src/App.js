import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import FoodImage from "./components/FoodImage";
import Meals from "./components/meals/Meals";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <FoodImage/>
            <main>
                <Meals/>
            </main>

        </div>
    );
}

export default App;
