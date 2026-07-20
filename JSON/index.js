import fs from "fs";

const data = fs.readFileSync("db.json", "utf8");
const json = JSON.parse(data);

console.log(json);
