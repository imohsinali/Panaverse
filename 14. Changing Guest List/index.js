const list = ["Sir Zia", "Moshin", "zeeshan"];

for (let i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log(`${list[2]} can't make it`);

list[2] = "Qasin";

for (let i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}
