var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array: ", numberArray);

var filteredNumberArray1 = numberArray.filter(function (value) {
  return value > 5;
});
console.log("Filtered Number Array: ", filteredNumberArray1);

//OR

function searchNumber(value){
    return value > 5;
}
var filteredNumberArray2 = numberArray.filter(searchNumber);
console.log("Filtered Number Array: ", filteredNumberArray2);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("Shopping List: ", shoppingList);

var searchString = "Bismol";
function containsFilter(value){
  return value.indexOf(searchString) !== -1;
}

var filteredShoppingList = shoppingList.filter(containsFilter);
console.log("Filtered Shopping List: ", filteredShoppingList);
