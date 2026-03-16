function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let currentBoxes = 0;
  let totalUnits = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const [boxes, unitsPerBox] = boxTypes[i];

    const boxesToFit = Math.min(boxes, truckSize - currentBoxes);

    currentBoxes += boxesToFit;
    totalUnits += boxesToFit * unitsPerBox;

    if (currentBoxes === truckSize) {
      break;
    }
  }

  return totalUnits;
}
