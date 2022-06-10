const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries =batteryBatches.reduce(getSum)

// function getSum(total , element) {
// return total + element;
// }

// also

const totalBatteries=batteryBatches.reduce((sum ,number)=>sum + number) 