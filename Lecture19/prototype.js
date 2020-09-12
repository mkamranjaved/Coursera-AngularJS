var parent = {
  value: "Parent value",
  obj: {
    objValue: "Parent Obj Value"
  },
  walk: function () {
    console.log("Walking");
  }
};
var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);


child.value = "Child Value";
child.obj.objValue = "Child Obj Value"
console.log("*** CHANGED: child.value = 'Child Value'");
console.log("*** CHANGED: child.obj.objValue = 'Child Obj Value'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj === parent.obj ?", child.obj === parent.obj);


var grandChild = Object.create(child);
console.log("grandChild: ", grandChild);
grandChild.walk();

//** Function Constructors

function Dog(name){
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

//Not being used as a function constructor
Dog("Max");
