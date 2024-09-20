export function generateOrderNumber(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let orderNumber = 0;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderNumber += characters.charAt(randomIndex);
    }
  
    return orderNumber;
  }