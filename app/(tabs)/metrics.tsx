import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import PrimaryButton from "../../components/ui/PrimaryButton";
import theme from "../../constants/theme";
import { getMetrics, type Metric, } from "../../services/metricsService";

export default function MetricsScreen() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function loadData() {
    try {
      setLoading(true);
      const data = await getMetrics();
      setMetrics(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar as métricas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator color={theme.colors.primary} />
      </View>
    );
  }

  const hasData = metrics.length > 0;
  const last = hasData ? metrics[metrics.length - 1] : null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Métricas</Text>

      <Card>
        <Text style={styles.cardTitle}>Resumo da jornada</Text>
        {last ? (
          <>
            <Text style={styles.summaryText}>
              Data: {last.date}
            </Text>
            <Text style={styles.summaryText}>
              Tempo sentado: {last.sittingMinutes} min
            </Text>
            <Text style={styles.summaryText}>
              Pausas: {last.breaksCount}
            </Text>
            <Text style={styles.summaryText}>
              Postura: {last.postureScore}/100
            </Text>
            <Text style={styles.summaryText}>
              Fadiga: {last.fatigueLevel}/10
            </Text>
          </>
        ) : (
          <Text style={styles.summaryText}>
            Ainda não há métricas registradas.
          </Text>
        )}
      </Card>

      <PrimaryButton
        title="Registrar métricas"
        onPress={() => router.push("/metrics/form")}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      {metrics.map(item => (
        <Card key={item.id}>
          <View style={styles.rowHeader}>
            <Text style={styles.cardTitle}>{item.date}</Text>
            <Chip label={`${item.sittingMinutes} min sentado`} color="primary" />
          </View>

          <Text style={styles.body}>
            Pausas: {item.breaksCount} · Postura: {item.postureScore}/100 ·
            Fadiga: {item.fatigueLevel}/10
          </Text>

          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/metrics/form",
                  params: { id: String(item.id) },
                })
              }
            >
              <Text style={styles.link}>Editar</Text>
            </TouchableOpacity>
          </View>
        </Card>
      ))}

      {!hasData && !error && (
        <Text style={styles.empty}>
          Você ainda não registrou nenhuma métrica.
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
  cardTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  summaryText: {
    ...theme.typography.body,
    marginTop: theme.spacing.xs,
  },
  body: {
    ...theme.typography.body,
    marginTop: theme.spacing.xs,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    marginTop: theme.spacing.sm,
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  link: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
  error: {
    color: theme.colors.danger,
    marginTop: theme.spacing.sm,
  },
  empty: {
    marginTop: theme.spacing.lg,
    color: theme.colors.textMuted,
  },
});
