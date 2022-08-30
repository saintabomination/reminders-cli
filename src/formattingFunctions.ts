export const formatAsTable = (columns: string[][]): void => {
  columns.forEach(
    column => {
      let maxEntryLength: number = 0;

      column.forEach(
        entry => {
          if (entry.length > maxEntryLength) maxEntryLength = entry.length;
        }
      );

      console.log(maxEntryLength);
    }
  );
}
