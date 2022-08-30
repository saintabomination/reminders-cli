import { fetchReminders } from './functions/dataFunctions';
import { formatAsTable } from './formattingFunctions';

const reminders = fetchReminders();
formatAsTable([
  reminders.map(reminder => reminder.id),
  reminders.map(reminder => reminder.text),
  reminders.map(reminder => reminder.date),
]);
