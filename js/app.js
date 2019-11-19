function Vegetable(name) { //108 pg. constuctor 
    //this is called constructor notation
    this.name = name;// foo.name = name;
}

String.prototype.foo = function foo() {
    console.log('Foo!!!')
}

var hello = 'world';
hello.foo();

var foo = new Vegetable('bar');
console.log(foo.name);
foo.getName();

var baz = new Vegetable('foo');
console.log(baz.name);
baz.getName();


//prototypes are ways to add methods to a constructor function. all instances of that constructor prototype they will recieve that prototype
Vegetable.prototype.getName = function getName() {
    console.log(this.name)
}

var carrot = new Vegetable('carrot');
var bean = new Vegetable('bean');

carrot.getName();
bean.getName();