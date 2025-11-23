import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";
import theme from "../../constants/theme";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá 👋</Text>
        <Text style={styles.subtitle}>
          Cuide da sua jornada de trabalho hoje.
        </Text>
      </View>

      <Card style={styles.wellbeingCard}>
        <Text style={styles.sectionTitle}>Índice de bem-estar</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.scoreNumber}>72</Text>
          <Text style={styles.scoreOutOf}>/100</Text>
        </View>
        <Chip label="Razoável • vamos melhorar?" color="warning" />
        <Text style={styles.scoreHint}>
          Pequenas pausas ao longo do dia já reduzem o risco de fadiga e dor
          muscular.
        </Text>
      </Card>

      <Text style={styles.sectionTitle}>Hoje</Text>
      <View style={styles.row}>
        <Card>
          <Text style={styles.label}>Pausas realizadas</Text>
          <Text style={styles.value}>4</Text>
          <Text style={styles.caption}>Meta mínima: 6</Text>
        </Card>

        <Card>
          <Text style={styles.label}>Tempo sentado</Text>
          <Text style={styles.value}>6h 20min</Text>
          <Text style={styles.caption}>Acima do ideal</Text>
        </Card>
      </View>


      <Card>
        <Text style={styles.sectionTitle}>Sugestão para agora</Text>
        <Text style={styles.body}>
          Levante-se, alongue ombros e pescoço e caminhe um pouco pelo ambiente.
        </Text>
        <View style={styles.chipsRow}>
          <Chip label="2 min" color="primary" />
          <Chip label="Alongamento leve" color="success" />
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Ações rápidas</Text>

      <PrimaryButton
        title="Gerenciar lembretes"
        onPress={() => router.push("/(tabs)/reminders")}
      />

      <View style={{ height: theme.spacing.sm }} />

      <SecondaryButton
        title="Ver métricas completas"
        onPress={() => router.push("/(tabs)/metrics")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },

  header: {
    marginBottom: theme.spacing.md,
  },

  greeting: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },

  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.xs,
  },

  wellbeingCard: {
    marginBottom: theme.spacing.lg,
  },

  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: theme.spacing.sm,
  },

  scoreNumber: {
    fontSize: 40,
    fontWeight: "700",
    color: theme.colors.primary,
  },

  scoreOutOf: {
    fontSize: 18,
    color: theme.colors.textMuted,
    marginLeft: 4,
    marginBottom: 4,
  },

  scoreHint: {
    ...theme.typography.caption,
    marginTop: theme.spacing.sm,
  },

  row: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  label: {
    ...theme.typography.label,
    color: theme.colors.textMuted,
  },

  value: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark,
    marginTop: theme.spacing.xs,
  },

  caption: {
    ...theme.typography.caption,
    marginTop: theme.spacing.xs,
  },

  body: {
    ...theme.typography.body,
    marginTop: theme.spacing.sm,
  },

  chipsRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },

});

