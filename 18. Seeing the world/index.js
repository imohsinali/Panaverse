const places = ["Istanbul", "Spain", "Canda", "Venice", "Antarctica"];
for (let i = 0; i < places.length; i++) {
  console.log(places[i]);
}

const arr1 = [...places].sort((a,b)=>a-b);
console.log(arr1);
console.log(places);
const arr2 = places.slice().reverse();
console.log(arr2);
console.log(places);
