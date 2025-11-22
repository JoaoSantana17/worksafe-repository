import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Trabalhador WorkSafe</Text>

        <Text style={styles.label}>Modo de trabalho</Text>
        <Text style={styles.value}>Híbrido</Text>

        <Text style={styles.label}>Pausas preferidas</Text>
        <Text style={styles.value}>A cada 45 minutos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  label: {
    fontSize: 12,
    textTransform: "uppercase",
    color: Colors.textMuted,
    marginTop: 4,
  },
  value: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "500",
  },
});
