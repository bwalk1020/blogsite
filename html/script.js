
var greeting = '';
const sayHello = () => {
  return 'hello';
}
const future = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(sayHello);
  }, 2000)
});

future.then((greeting) => {
  console.log(greeting);
});