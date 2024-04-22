function distanceFromHqInBlocks(block) {
  const headquarters = 42;
  return Math.abs(block - headquarters);
}

function distanceFromHqInFeet(block) {
  const blockInFeet = distanceFromHqInBlocks(block) * 264;
  return blockInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const distance = Math.abs(startBlock - endBlock) * 264;
  return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let farePrice = 0;

  if (distance <= 400) {
    farePrice = 0;
  } else if (distance > 400 && distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    farePrice = 25;
  } else {
    return "cannot travel that far";
  }

  return farePrice;
}
