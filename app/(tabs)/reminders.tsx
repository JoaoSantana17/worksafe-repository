import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import PrimaryButton from "../../components/ui/PrimaryButton";
import theme from "../../constants/theme";
import type { Reminder } from "../../services/reminderService";
import { deleteReminder, getReminders } from "../../services/reminderService";

export default function RemindersScreen() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function loadData() {
    try {
      setLoading(true);
      const data = await getReminders();
      setReminders(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os lembretes.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    Alert.alert("Excluir", "Deseja realmente excluir este lembrete?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteReminder(id);
            setReminders(prev => prev.filter(r => r.id !== id));
          } catch (err) {
            Alert.alert("Erro", "Não foi possível excluir o lembrete.");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lembretes</Text>

      <PrimaryButton
        title="Novo lembrete"
        onPress={() => router.push("/reminder/form")}
      />
      

      {error && <Text style={styles.error}>{error}</Text>}

      {reminders.map(item => (
        <Card key={item.id}>
          <View style={styles.header}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Chip
              label={item.active ? "Ativo" : "Inativo"}
              color={item.active ? "success" : "textMuted"}
            />
          </View>

          <Text style={styles.desc}>{item.description}</Text>

          <View style={styles.footer}>
  <Chip label={`${item.intervalMinutes} min`} color="primary" />

  <TouchableOpacity
    onPress={() =>
      router.push({
        pathname: "/reminder/form",
        params: { id: String(item.id) },
      })
    }
  >
    <Text style={styles.link}>Editar</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => {
      console.log("Clique no EXCLUIR, id:", item.id);
      handleDelete(item.id);
    }}
  >
    <Text style={[styles.link, { color: theme.colors.danger }]}>
      Excluir
    </Text>
  </TouchableOpacity>
</View>

        </Card>
      ))}

      {reminders.length === 0 && !error && (
        <Text style={styles.empty}>
          Você ainda não tem lembretes cadastrados.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  error: {
    color: theme.colors.danger,
    marginTop: theme.spacing.sm,
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
  footer: {
    marginTop: theme.spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  link: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
  empty: {
    marginTop: theme.spacing.lg,
    color: theme.colors.textMuted,
  },
});
