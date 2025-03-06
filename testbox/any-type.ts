// any type essentially disables type checking
// allowing any type of value to be assigned to it
// we shouldn't use any type unless really necessary
// though an usecase would be when we are transitioning
// from JavaScript codebase to TypeScript codebase
// we can use any type to simply make it run
// with the promise of fixing it later :)
let value: any = 1;
value.toUpperCase();
value = 'hello';
value.map();
value = [5, 9, 5, 8];
