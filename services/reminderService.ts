import { api } from "./api";

export type Reminder = {
  id: number;
  title: string;
  description: string;
  intervalMinutes: number;
  active: boolean;
};

export async function getReminders() {
  const res = await api.get<Reminder[]>("/reminders");
  return res.data;
}

export async function getReminderById(id: number) {
  const res = await api.get<Reminder>(`/reminders/${id}`);
  return res.data;
}

export async function createReminder(data: Omit<Reminder, "id">) {
  const res = await api.post<Reminder>("/reminders", data);
  return res.data;
}

export async function updateReminder(id: number, data: Omit<Reminder, "id">) {
  const res = await api.put<Reminder>(`/reminders/${id}`, data);
  return res.data;
}

export async function deleteReminder(id: number): Promise<void> {
  await api.delete(`/reminders/${id}`);
}
