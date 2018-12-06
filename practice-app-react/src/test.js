let obj = {username:"xl"};
// obj = {
//   "username":"qj"
// }
for (const key in obj) {
  if (obj.hasOwnProperty(key) && key === "username") {
    console.log(obj[key]);
  }
}