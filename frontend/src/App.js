import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { UserData } from './data'

function App() {


  const [userData, setUserData] = useState({
    labels: [10, 20, 40, 80],
    datasets: [
      {
        label: "Users Gained",
        data: [1, 5, 10, 20],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  console.log(UserData)



  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );

  

}

export default App