export default function formatDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString("en-NZ", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }