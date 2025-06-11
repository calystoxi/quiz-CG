import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionCard from "./QuestionCard";
import useGamepadControls from "./useGamepad";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (!window.__quizData) {
      axios
        .get("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((res) => {
          const formatted = res.data.results.map((q) => ({
            question: q.question,
            correct: q.correct_answer,
            answers: shuffle([...q.incorrect_answers, q.correct_answer]),
          }));
          setQuestions(formatted);
          window.__quizData = formatted;
        })
        .catch((error) => {
          if (error.response?.status === 429) {
            console.warn("Trop de requêtes API, veuillez patienter.");
          } else {
            console.error(error);
          }
        });
    } else {
      setQuestions(window.__quizData);
    }
  }, []);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleSelect(i) {
    setSelected(i);
  }

  function nextQuestion() {
    if (selected === null) return;
    if (questions[index].answers[selected] === questions[index].correct) {
      setScore((score) => score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setFocused(null);
    } else {
      setFinished(true);
    }
  }

  useGamepadControls(
    () => {
      if (focused !== null && selected === null) {
        setSelected(focused); // valider le choix
      } else if (selected !== null) {
        nextQuestion(); // passer à la question suivante
      }
    },
    () => {
      const max = questions[index]?.answers?.length || 0;
      if (max === 0) return;
      setFocused((prev) => (prev === null ? 0 : (prev - 1 + max) % max));
    },
    () => {
      const max = questions[index]?.answers?.length || 0;
      if (max === 0) return;
      setFocused((prev) => (prev === null ? 0 : (prev + 1) % max));
    }
  );

  if (questions.length === 0) return <p>Chargement...</p>;
  if (finished) return <h2>Score : {score} / {questions.length}</h2>;

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <div style={{ marginBottom: 10 }}>
        Question {index + 1} / {questions.length}
      </div>
      <QuestionCard
        question={questions[index].question}
        answers={questions[index].answers}
        selected={selected}
        focused={focused}
        onSelect={handleSelect}
      />
      <button
        onClick={nextQuestion}
        disabled={selected === null}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
          cursor: selected === null ? "not-allowed" : "pointer",
        }}
      >
        {index + 1 === questions.length ? "Terminer" : "Question suivante"}
      </button>
    </div>
  );
}
