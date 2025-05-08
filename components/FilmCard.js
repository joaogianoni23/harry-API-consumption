import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um personagem (film) como propriedade
export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem dos personagens */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações dos personagens */}
      <View style={styles.info}>
        {/* Nome do personagem */}
        <Text style={styles.title}>
          {film.name ?? "Nome não disponível"}
        </Text>

        {/* Nomes alternativos dos personagens */}
        <Text style={styles.subtitleSmall}>
          {film.alternate_names ?? "Nomes alternativos não disponiveis"}
        </Text>

        {/* Casa que o personagem pertence */}
        <Text style={styles.text}>
          🏠 Casa: {film.house ?? "Casa não disponível"}
        </Text>

        {/* Data de aniversário */}
        <Text style={styles.text}>
          🎈 Aniversário: {film.dateOfBirth ?? "Aniversário não informado"}
        </Text>

        {/* Acestralidade do personagem */}
        <Text style={styles.text}>
          👤 Ancestralidade: {film.ancestry ?? "Ancestralidade não informada"}
        </Text>

        {/* Espécie do personagem */}
        <Text style={styles.text}>
          🥶 Espécie: {film.species ?? "Espécie não informada"}
        </Text>

        {/* Nome do ator */}
        <Text style={styles.text}>
          😎 Ator: {film.actor ?? "Nome não informado"}
        </Text>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%", 
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 4,
    fontStyle: "italic",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
});
