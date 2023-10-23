import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";

function ScenarioList() {

  
  
  let [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1234/api/6533c4490e9c16c7171df789/showQuestion")
      .then(response => response.json())
      .then(data => {
        setQuestion(data);
        setLoading(false);
      })
  }, []);



  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/api/6533c4490e9c16c7171df789/showOptions")
      .then(response => response.json())
      .then(data => {
        setOptions(data);
        setLoading(false);
      })
  }, []);


  // const [myData, setMyData] = useState({
  //   labels: options?.map((o) => (o.title)),
  //   datasets: [{
  //     label: "Votes",
  //     data: options?.map((o) => (o.votes))
  //   }]
  // })


  const [myData, setMyData] = useState({
    labels: ["A", "B", "C"],
    datasets: [{
      label: "Votes",
      data: [1, 5, 10, 25, 3, 30]
    }]
  })

  const [isToggled, setIsToggled] = useState(false);


  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  

  return (
    <div>
      {/* <div>{JSON.stringify(questions)}</div> */}
      <div className="Chart-heading">{question.title}</div>

      <button onClick={()=> setIsToggled(!isToggled)}>Render</button>
      {isToggled && <BarChart chartData={ myData } />}
      

      <div>

      </div>
    </div>
  )
}

export default ScenarioList