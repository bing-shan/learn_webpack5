function getString(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world!!!");
    }, 2000);
  });
}
async function helloWorld() {
  let string = await getString();
  console.log(string);
}

export default helloWorld;
