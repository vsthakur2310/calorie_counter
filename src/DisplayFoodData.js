import React from "react";
import "./styles.css";

// function DisplayFoodTable({ calorieData, foodClickHandler }) {
//   const columns = [
//     {
//       Header: "Name",
//       accessor: "name"
//     },
//     {
//       Header: "Measure",
//       accessor: "measure"
//     },
//     {
//       Header: "Calories",
//       accessor: "calories"
//     }
//   ];
//   return (
//     <div>
//       <ReactTable
//         data={calorieData}
//         columns={columns}
//         defaultPageSize={2}
//         pageSizeOptions={[2, 4, 6]}
//       />
//     </div>
//   );
// }

function DisplayFoodTable({ calorieData, foodClickHandler, foodremove }) {
  // return calorieData.map(({ name, measure, calories }) => (
  //   <FoodPill
  //     key={name}
  //     name={name}
  //     measure={measure}
  //     calories={calories}
  //     foodClickHandler={foodClickHandler}
  //   />
  // ));
  return (
    <div>
      <table class="table table-borderless table-hover  mt-5">
        <thead>
          <tr>
            <th class="column" >Food Name</th>
            <th class="column" >Measure</th>
            <th class="column" >Calories Intake</th>
            <th class="column" >Add</th>
            <th class="column" >Remove</th>
          </tr>
        </thead>
        <tbody>
          {calorieData.map(({ name, measure, calories }, i) => (
            <tr>
              {
                <>
                  <td>{name}</td>
                  <td>{measure}</td>
                  <td>{calories}</td>
                  <td key={i} onClick={() => foodClickHandler(calories)}> <button  class="btn btn-outline-info" >
          +
        </button></td>
        {/* <td > <button  class="btn btn-outline-danger" >
          -
        </button></td> */}
        <td onClick={() => foodremove(calories)}> <button  class="btn btn-outline-danger" >
          -
        </button></td>
                </>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayFoodTable;
