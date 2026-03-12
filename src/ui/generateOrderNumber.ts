    export function generateOrderNumber() {
  const timestamp = Date.now();
  const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random

  return `MS-${timestamp}-${random}`;
}
