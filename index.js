function distanceFromHqInBlocks(blocks) { return blocks - 42; }
function distanceFromHqInFeet(feet){
  distanceFromHqInBlocks(blocks);
  return feet * 264;
}
function distanceTravelledInFeet(start, destination){return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);}
function calculatesFarePrice(start, destination){return distanceTravelledInFeet(start, destination) * 264;}
