import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const challenges = [
  {
    level: 1,
    challenges: [
      {
        id: 1,
        question: "Qual é a saída do seguinte código em Python? print(2 + 2)",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        id: 2,
        question: "Quantos bytes tem um inteiro em Python?",
        options: ["2", "4", "8", "16"],
        answer: "4",
      },
    ],
  },
  {
    level: 2,
    challenges: [
      {
        id: 1,
        question:
          "O que é um framework JavaScript amplamente usado para desenvolvimento web?",
        options: ["Angular", "React", "Vue", "Ember"],
        answer: "React",
      },
      {
        id: 2,
        question:
          "Qual linguagem de programação é usada para estilizar páginas da web?",
        options: ["Python", "Java", "CSS", "C++"],
        answer: "CSS",
      },
    ],
  },
  // Adicione mais níveis e desafios aqui
];

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmission = () => {
    const levelChallenges = challenges[currentLevel].challenges;
    const challenge = levelChallenges[currentChallenge];

    if (selectedOption === challenge.answer) {
      setFeedback("Resposta correta! Próximo desafio:");
      if (currentChallenge + 1 < levelChallenges.length) {
        setCurrentChallenge(currentChallenge + 1);
      } else {
        setCurrentLevel(currentLevel + 1);
        setCurrentChallenge(0);
      }
      setSelectedOption(null);
    } else {
      setFeedback("Resposta incorreta. Tente novamente.");
    }
  };

  const handleGoBack = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(currentChallenge - 1);
      setSelectedOption(null);
      setFeedback("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Desafios de Programação - Nível {currentLevel + 1}
      </Text>
      {currentLevel < challenges.length ? (
        <View>
          <Text style={styles.question}>
            {challenges[currentLevel].challenges[currentChallenge].question}
          </Text>
          <View style={styles.optionsContainer}>
            {challenges[currentLevel].challenges[currentChallenge].options.map(
              (option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionButton,
                    selectedOption === option && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelection(option)}
                >
                  <Text style={styles.optionButtonText}>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
          <TouchableOpacity
            style={styles.answerButton}
            onPress={handleAnswerSubmission}
          >
            <Text style={styles.answerButtonText}>Enviar Resposta</Text>
          </TouchableOpacity>
          {currentChallenge > 0 && (
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={handleGoBack}
            >
              <Text style={styles.goBackButtonText}>Voltar</Text>
            </TouchableOpacity>
          )}
          <Text>{feedback}</Text>
        </View>
      ) : (
        <Text style={styles.congrats}>
          Parabéns, você concluiu todos os desafios!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionsContainer: {
    marginBottom: 10,
  },
  optionButton: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "white",
  },
  selectedOption: {
    backgroundColor: "lightblue",
  },
  optionButtonText: {
    fontSize: 16,
    textAlign: "center",
  },
  answerButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  answerButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  goBackButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  goBackButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  congrats: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
