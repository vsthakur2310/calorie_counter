import React from "react";
import "./styles.css";
import calorieData from "./data/food-data";
import DisplayFoodTable from "./DisplayFoodData";

// function AddInternalNum(props) {
//   const internal = 54;
//   return <div> Your sum is : {internal + props.num}</div>;
// }

// function GetHeaderElement(props) {
//   return (
//     <>
//       <h2>{props.heading}</h2>
//       <p>(Click on the products to check for calorie intake)</p>
//     </>
//   );
// }

function FoodClicked({ foodClicked }) {
  if (foodClicked > 0) {
    return <h4 className ="upperhead">Calories consumed today : {foodClicked} </h4>;
  } else {
    return <h4 className ="upperhead" >Calorie consumption zero :)</h4>;
  }
}
export default class App extends React.Component {
  state = {
    calories: 0,
    foodClicked: 0
  };
  foodClickHandler = calories => {
    this.setState({ calories: this.state.calories + calories });
  };

  foodremove = calories => {
    this.setState({ calories: this.state.calories - calories });
  };

  upDateCalorie = () => {
    this.setState({ calories: 0 });
  };
 render() {

  
return (
      <div className="App">
        <FoodClicked foodClicked={this.state.calories} />
        
        <button  class="btn btn-success" onClick={this.upDateCalorie}>
          Reset
        </button>
        
        <DisplayFoodTable
          calorieData={calorieData}
          foodClickHandler={this.foodClickHandler}
          foodremove={this.foodremove}
        />
      </div>
    );
  }
}

// function addNum(num1) {
//   return num1 + 30;
// }
