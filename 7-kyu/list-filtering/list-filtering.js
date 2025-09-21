//can't simply test as != ''; that stumped me at first and then I remembered the typeof operator :) 
function filter_list(l) {
  // Return a new array with the strings filtered out
return l.filter( str => typeof str != 'string');
}