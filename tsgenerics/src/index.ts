console.log("test");

function identity<T>(arg: T): T {
  return arg;
}

const whoAmI = identity<string>("a");

console.log(whoAmI);
