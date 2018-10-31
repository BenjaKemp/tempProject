export const TaxiFilter = (taxi, filters) => {

  return filters.isActive=== "" ? taxi : taxi.filter(cars => {
    return cars.state === filters.isActive;
  });
};
export const CarsFilter = (cars, filters) => {

  return cars.filter(car=>{
    let conditionOne = filters.interior === "" ? true : car.interior === filters.interior;
    let conditionTwo = filters.exterior === "" ? true : car.exterior === filters.exterior
    return conditionOne && conditionTwo
  })

};
