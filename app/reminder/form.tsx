import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator, Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import theme from "../../constants/theme";
import {
    createReminder,
    deleteReminder,
    getReminderById,
    updateReminder,
    type Reminder,
} from "../../services/reminderService";

export default function ReminderFormScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [intervalMinutes, setIntervalMinutes] = useState("45");
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);

  async function loadReminder() {
    if (!params.id) return;
    try {
      setLoading(true);
      const data: Reminder = await getReminderById(Number(params.id));
      setTitle(data.title);
      setDescription(data.description);
      setIntervalMinutes(String(data.intervalMinutes));
      setActive(data.active);
    } catch (err) {
      Alert.alert("Erro", "Não foi possível carregar o lembrete.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!title.trim() || !description.trim()) {
      Alert.alert("Atenção", "Preencha título e descrição.");
      return;
    }

    const payload = {
      title,
      description,
      intervalMinutes: Number(intervalMinutes),
      active,
    };

    try {
      setLoading(true);

      if (isEditing && params.id) {
        await updateReminder(Number(params.id), payload);
      } else {
        await createReminder(payload);
      }

      Alert.alert("Sucesso", "Lembrete salvo com sucesso!");
      router.back();
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar o lembrete.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!params.id) return;

    Alert.alert(
      "Excluir lembrete",
      "Tem certeza que deseja excluir este lembrete?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              await deleteReminder(Number(params.id));
              Alert.alert("Sucesso", "Lembrete excluído com sucesso!");
              router.back();
            } catch (err) {
              Alert.alert("Erro", "Não foi possível excluir o lembrete.");
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  }

  useEffect(() => {
    if (isEditing) {
      loadReminder();
    }
  }, [params.id]);

  if (loading && isEditing) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isEditing ? "Editar lembrete" : "Novo lembrete"}
      </Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Alongamento rápido"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={description}
        onChangeText={setDescription}
        placeholder="Explique o que o colaborador deve fazer na pausa."
        multiline
        numberOfLines={3}
      />

      <Text style={styles.label}>Intervalo (minutos)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes}
        onChangeText={setIntervalMinutes}
        keyboardType="numeric"
      />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Ativo</Text>
        <Switch value={active} onValueChange={setActive} />
      </View>

      <PrimaryButton
        title={loading ? "Salvando..." : "Salvar"}
        onPress={handleSave}
      />

      {isEditing && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
          disabled={loading}
        >
          <Text style={styles.deleteText}>Excluir lembrete</Text>
        </TouchableOpacity>
      )}
    </View>
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
  label: {
    fontSize: 14,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.sm,
  },
  multiline: {
    height: 80,
    textAlignVertical: "top",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.spacing.md,
  },
  deleteButton: {
    marginTop: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    alignItems: "center",
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.danger,
  },
  deleteText: {
    color: theme.colors.danger,
    fontWeight: "600",
  },
});
