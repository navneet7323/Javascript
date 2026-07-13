const p = new Promise((fullfill, reject) => {
  let sucess = true;

  if (sucess) {
    fullfill("getting Data");
  } else {
    reject("error Loading Data");
  }
});

console.log(p);

const pro = new Promise((fullfill, reject) => {
  let sucess = true;

  if (sucess) {
    fullfill("login successful");
  } else {
    reject("error Loading Data");
  }
});

pro.then((messsage) => {
  console.log(messsage);
});

let Votter = new Promise((fullfill, reject) => {
  let age = 2;

  if (age >= 18) {
    fullfill("You Can Vote");
  } else {
    reject("You Are Minor");
  }
});
Votter.then((n) => {
  console.log(n);
}).catch((error) => {
  console.log(error);
});

const download = new Promise((resolve, reject) => {
  let internet = true;

  if (internet) {
    resolve("Download Completed");
  } else {
    reject("No Internet");
  }
});

download
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const download = new Promise((resolve, reject) => {
  let internet = false;

  if (internet) {
    resolve("Download Completed");
  } else {
    reject("No Internet");
  }
});

download
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task completed");
  });

async function hello() {
  return "Hello";
}

console.log(hello());

function hello() {
  return Promise.resolve("Hello");
}
