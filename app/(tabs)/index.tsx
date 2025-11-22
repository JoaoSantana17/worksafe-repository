import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../components/ui/Card";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";
import theme from "../../constants/theme";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Card>
        <Text style={[theme.typography.h2, { color: theme.colors.text }]}>
          WorkSafe
        </Text>
        <Text style={[theme.typography.body, { marginTop: theme.spacing.sm }]}>
          Bem-estar no trabalho com monitoramento inteligente.
        </Text>
      </Card>

      <View style={styles.row}>
        <Card>
          <Text style={theme.typography.label}>Pausas hoje</Text>
          <Text style={styles.value}>4</Text>
        </Card>

        <Card>
          <Text style={theme.typography.label}>Tempo sentado</Text>
          <Text style={styles.value}>6h 20min</Text>
        </Card>
      </View>

      <PrimaryButton
        title="Gerenciar lembretes"
        onPress={() => router.push("/(tabs)/reminders")}
      />
      <View style={{ height: theme.spacing.sm }} />

      <SecondaryButton
        title="Ver métricas"
        onPress={() => router.push("/(tabs)/metrics")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  row: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginVertical: theme.spacing.md,
  },
  value: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark,
    marginTop: theme.spacing.xs,
  },
});
