const userNames = ["sajid", "syed", "Moshin", "ali", "zain"];

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] === "admin") {
    console.log(`Hello ${userNames[i]} would you like to see a status report?`);
  } else {
    console.log(`Hello ${userNames[i]} thankyou for logging again`);
  }
}
