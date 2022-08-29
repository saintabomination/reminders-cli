import { fetchReminders } from './functions/dataFunctions';

const reminders = fetchReminders();
reminders.forEach(reminder => {
  console.log(reminder.text);
});
