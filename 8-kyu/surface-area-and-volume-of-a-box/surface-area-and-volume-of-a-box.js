function getSize(width, height, depth){
  var box = { width: width, height:height, depth:depth};
  
  return [getArea(box), getVolume(box)];
}
​
​
function getArea(box){
  return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}
​
function getVolume(box){
  return box.width * box.height * box.depth;
}