import type { Reminder } from '../typings/entriesTypes'; 

export const fetchReminders = (): Reminder[] => {
  return [
    { id: '0', text: 'AA', date: '11. 3.' },
    { id: '1', text: 'AAAAA', date: '12. 3.' },
    { id: '2', text: 'AAA', date: '13. 3.' },
    { id: '3', text: 'A', date: '14. 3.' },
    { id: '4', text: 'AA', date: '15. 3.' },
  ];
}
