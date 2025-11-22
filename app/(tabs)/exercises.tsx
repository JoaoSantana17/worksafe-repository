import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function ExercisesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios rápidos</Text>
      <Text style={styles.subtitle}>
        Pequenas pausas guiadas para aliviar tensão e melhorar o foco.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Alongamento de pescoço</Text>
        <Text style={styles.cardText}>Duração: 30 segundos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Alongamento de punhos</Text>
        <Text style={styles.cardText}>Duração: 45 segundos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pausa para visão</Text>
        <Text style={styles.cardText}>Olhe para longe da tela por 20s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 4,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardTitle: { fontWeight: "600", fontSize: 16, color: Colors.text },
  cardText: { color: Colors.textMuted, marginTop: 4 },
});
