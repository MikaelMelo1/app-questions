import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const challenges = [
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
  // Adicione mais desafios aqui
];

export default function App() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmission = () => {
    const challenge = challenges[currentChallenge];
    if (selectedOption === challenge.answer) {
      setFeedback("Resposta correta! Próximo desafio:");
      setCurrentChallenge(currentChallenge + 1);
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
      <Text style={styles.title}>Desafios de Programação</Text>
      {currentChallenge < challenges.length ? (
        <View>
          <Text style={styles.question}>
            {challenges[currentChallenge].question}
          </Text>
          <View style={styles.optionsContainer}>
            {challenges[currentChallenge].options.map((option) => (
              <Button
                key={option}
                title={option}
                onPress={() => handleOptionSelection(option)}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOption,
                ]}
              />
            ))}
          </View>
          <Button title="Enviar Resposta" onPress={handleAnswerSubmission} />
          {currentChallenge > 0 && (
            <Button title="Voltar" onPress={handleGoBack} />
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
  },
  selectedOption: {
    backgroundColor: "lightblue",
  },
  congrats: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
