import { useState, useEffect } from "react";

function ScenarioList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1234/api/showQuestions")
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div>
      {/* <div>{JSON.stringify(questions)}</div> */}
      <div>
      {questions.map((q, index) => (
                <div key={index}>
                    <span>{q.title}</span>
                </div>
            ))}
      </div>
    </div>
  )
}

export default ScenarioList