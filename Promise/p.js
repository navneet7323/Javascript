let p = new Promise((ful, rej) => {
  let age = 20;

  if (age >= 18) {
    ful("Adult");
  } else {
    rej("Minor");
  }
});
p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
