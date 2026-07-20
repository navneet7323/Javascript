let promise = new Promise((res, rej) => {
  let age = 20;

  if (age >= 18) {
    res("Adult");
  } else {
    rej("Minor");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

let p = new Promise((res, rej) => {
  let money = 100;

  if (money >= 500) {
    res("You can buy a Phone.");
  } else {
    rej("not enough money");
  }
});
p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});



