import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(res => {
        const formatted = res.data.results.map(q => ({
          question: q.question,
          correct: q.correct_answer,
          answers: shuffle([...q.incorrect_answers, q.correct_answer])
        }));
        setQuestions(formatted);
      });
  }, []);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleAnswer(answer) {
    if (answer === questions[index].correct) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  }

  if (questions.length === 0) return <p>Chargement...</p>;
  if (finished) return <h2>Score : {score}/{questions.length}</h2>;

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: questions[index].question }} />
      {questions[index].answers.map((a, i) => (
        <button key={i} onClick={() => handleAnswer(a)} dangerouslySetInnerHTML={{ __html: a }} />
      ))}
    </div>
  );
}
