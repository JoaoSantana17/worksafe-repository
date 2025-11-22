import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import theme from "../../constants/theme";

const MOCK = [
  {
    id: 1,
    title: "Alongamento",
    desc: "Levante-se e alongue a cada 45 minutos.",
    active: true,
    interval: "45 min",
  },
  {
    id: 2,
    title: "Hidratação",
    desc: "Beba água com frequência.",
    active: true,
    interval: "60 min",
  },
  {
    id: 3,
    title: "Descanso de tela",
    desc: "Olhe longe por 20s.",
    active: false,
    interval: "90 min",
  },
];

export default function RemindersScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lembretes</Text>

      {MOCK.map(item => (
        <Card key={item.id}>
          <View style={styles.header}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Chip label={item.active ? "Ativo" : "Inativo"} color={item.active ? "success" : "textMuted"} />
          </View>

          <Text style={styles.desc}>{item.desc}</Text>

          <View style={{ marginTop: theme.spacing.sm }}>
            <Chip label={item.interval} color="primary" />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  desc: {
    ...theme.typography.body,
    marginTop: theme.spacing.sm,
  },
});
