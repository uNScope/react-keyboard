export function formatTime(s) {
  return !s ? "0:00" : (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}
