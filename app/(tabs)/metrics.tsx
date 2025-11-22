import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function MetricsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métricas de Bem-estar</Text>
      <Text style={styles.subtitle}>
        Acompanhe como está sua rotina ao longo do dia.
      </Text>

      <View style={styles.grid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Pausas hoje</Text>
          <Text style={styles.metricValue}>4</Text>
          <Text style={styles.metricHint}>Meta: 5 pausas / dia</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Tempo sentado</Text>
          <Text style={styles.metricValue}>6h 20min</Text>
          <Text style={styles.metricHint}>Limite saudável: até 6h</Text>
        </View>
      </View>

      <View style={[styles.metricCard, styles.riskCard]}>
        <Text style={styles.metricLabel}>Nível de risco</Text>
        <Text style={styles.riskValue}>Moderado</Text>
        <Text style={styles.metricHint}>
          Faça uma pausa de alongamento e beba água nos próximos minutos.
        </Text>
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
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    gap: 12,
  },
  metricCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  metricLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    color: Colors.textMuted,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.primaryDark,
    marginTop: 4,
  },
  metricHint: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 6,
  },
  riskCard: {
    marginTop: 16,
    borderColor: Colors.accentWarning,
  },
  riskValue: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.accentWarning,
    marginTop: 4,
  },
});
