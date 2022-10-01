const infoCar=(manu, model)=> {
  return (car = {
    name: "Car",
    price: "1444.00",
    rating: "5.00",
    rating_text: "1.00",
    mafacturer: manu,
    modelName: model,
  });
}

const cars = infoCar("Xli", "Merceedes");
console.log(cars);
