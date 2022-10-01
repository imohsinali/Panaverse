const list = ["Sir zia", "Moshin", "Zeeshan"];

for (let i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log(`${list[2]} can't make it`);

list[2] = "Qasim";

for (let i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log("I have got a bigger table");

list.push("Danyial");

for (let i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to ${list[i]}`);
}
