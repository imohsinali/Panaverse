const current_users = ["mohsin", "syed ali", "ali", "zain"];
const new_users = ["sajid", "LI", "JK khan", "MAMO", "real"];

for (let i = 0; i < new_users.length; i++) {
  if (current_users[i] == new_users[i]) {
    console.log("Username taken");
  } else {
    console.log("Username not taken");
  }
}
