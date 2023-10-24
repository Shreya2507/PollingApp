import { useEffect, useState } from "react";
import "./App.css";
import PieChart from "./components/PieChart";
import { wait } from "@testing-library/user-event/dist/utils";

function App() {
  const [loading, setLoading] = useState(true);
  let [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [myData, setMyData] = useState({})
  const request1 = fetch('http://localhost:1234/api/6533c4490e9c16c7171df789/showQuestion').then(response => response.json());
  const request2 = fetch('http://localhost:1234/api/6533c4490e9c16c7171df789/showOptions').then(response => response.json());
  useEffect(() => {
    Promise.all([request1, request2])
      .then(([data1, data2]) => {
        setQuestion(data1);
        setOptions(data2);
        setLoading(false);


      })
      .catch(error => {
        console.error(error);
      });


      
    setMyData({
      labels: options?.map((o) => (o.title)),
      datasets: [
        {
          label: 'Votes',
          data: options?.map((o) => (o.votes)),
        },
      ]

    })


    console.log(options?.map((o) => (o.title)))
  }, []);





  // QUESTION


  // useEffect(() => {
  //   fetch("http://localhost:1234/api/6533c4490e9c16c7171df789/showQuestion")
  //     .then(response => response.json())
  //     .then(data => {
  //       setQuestion(data);
  // setLoading(false);
  //     }

  //     )
  // }, []);



  // //OPTIONS


  // useEffect(() => {
  //   fetch("http://localhost:1234/api/6533c4490e9c16c7171df789/showOptions")
  //     .then(response => response.json())
  //     .then(data => {
  //       setOptions(data);
  //       setLoading(false);
  //     })
  // }, []);




















  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="App">
      <div className="Chart-heading">{question.title}</div>
      {/* <div>{console.log(Array.isArray(options?.map((o) => (o.title)))) }</div> */}
      {console.log(options?.map((o) => (o.title)))}
      {console.log(options?.map((o) => (o.title)))}
      console.log(options.title)


      
      <div style={{ width: 700 }}>
        <PieChart chartData={myData} />
      </div>
    </div>
  );
}

export default App;
