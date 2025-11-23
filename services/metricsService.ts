import { api } from "./api";

export type Metric = {
  id: number;
  date: string;
  sittingMinutes: number;
  breaksCount: number;
  postureScore: number;
  fatigueLevel: number;
};

export async function getMetrics(): Promise<Metric[]> {
  const res = await api.get<Metric[]>("/metrics");
  return res.data;
}

export async function getMetricById(id: number): Promise<Metric> {
  const res = await api.get<Metric>(`/metrics/${id}`);
  return res.data;
}

export async function createMetric(
  data: Omit<Metric, "id">
): Promise<Metric> {
  const res = await api.post<Metric>("/metrics", data);
  return res.data;
}

export async function updateMetric(
  id: number,
  data: Omit<Metric, "id">
): Promise<Metric> {
  const res = await api.put<Metric>(`/metrics/${id}`, data);
  return res.data;
}

export async function deleteMetric(id: number): Promise<void> {
  await api.delete(`/metrics/${id}`);
}
