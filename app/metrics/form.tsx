import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View, } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import theme from "../../constants/theme";
import { createMetric, getMetricById, updateMetric, type Metric, } from "../../services/metricsService";

export default function MetricsFormScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!params.id;

  const [date, setDate] = useState("");
  const [sittingMinutes, setSittingMinutes] = useState("0");
  const [breaksCount, setBreaksCount] = useState("0");
  const [postureScore, setPostureScore] = useState("80");
  const [fatigueLevel, setFatigueLevel] = useState("3");
  const [loading, setLoading] = useState(false);

  async function loadMetric() {
    if (!params.id) return;
    try {
      setLoading(true);
      const data: Metric = await getMetricById(Number(params.id));
      setDate(data.date);
      setSittingMinutes(String(data.sittingMinutes));
      setBreaksCount(String(data.breaksCount));
      setPostureScore(String(data.postureScore));
      setFatigueLevel(String(data.fatigueLevel));
    } catch (err) {
      Alert.alert("Erro", "Não foi possível carregar a métrica.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!date.trim()) {
      Alert.alert("Atenção", "Preencha a data (ex: 2025-11-22).");
      return;
    }

    const payload = {
      date,
      sittingMinutes: Number(sittingMinutes),
      breaksCount: Number(breaksCount),
      postureScore: Number(postureScore),
      fatigueLevel: Number(fatigueLevel),
    };

    try {
      setLoading(true);

      if (isEditing && params.id) {
        await updateMetric(Number(params.id), payload);
      } else {
        await createMetric(payload);
      }

      Alert.alert("Sucesso", "Métrica salva com sucesso!");
      router.back();
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar a métrica.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isEditing) {
      loadMetric();
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
        {isEditing ? "Editar métrica" : "Registrar métrica"}
      </Text>

      <Text style={styles.label}>Data (AAAA-MM-DD)</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="2025-11-22"
      />

      <Text style={styles.label}>Tempo sentado (minutos)</Text>
      <TextInput
        style={styles.input}
        value={sittingMinutes}
        onChangeText={setSittingMinutes}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Quantidade de pausas</Text>
      <TextInput
        style={styles.input}
        value={breaksCount}
        onChangeText={setBreaksCount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Postura (0–100)</Text>
      <TextInput
        style={styles.input}
        value={postureScore}
        onChangeText={setPostureScore}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fadiga (0–10)</Text>
      <TextInput
        style={styles.input}
        value={fatigueLevel}
        onChangeText={setFatigueLevel}
        keyboardType="numeric"
      />

      <PrimaryButton
        title={loading ? "Salvando..." : "Salvar"}
        onPress={handleSave}
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
});
