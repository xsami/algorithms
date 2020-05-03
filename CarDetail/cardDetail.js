// Car "class", definition of a car 
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Given a list of type Car. this function will return
// a detailed object with the summary of each brand and model
function getDetailCar(cardList) {

    const mapCars = {};

    cardList.forEach(carObj => {
        brand = carObj.brand;
        model = carObj.model;

        if (mapCars[brand] == undefined) {
            mapCars[brand] = {
                total: 1,
                name: brand,
                models: {
                    [model]: 1
                }
            };
        } else {
            mapCars[brand].total++;
            if ( mapCars[brand].models[model] == undefined) {
                mapCars[brand].models[model] = 1;
            } else {
                mapCars[brand].models[model]++;
            }
        }
    });

    return {
        details: {
            brand: mapCars
        }
    };

}

function main(list) {

    const carObjList = [];

    // Build a list of type car
    list.forEach(element => {
        carObjList.push(new Car(element[0], element[1]));
    });

    const r2 = getDetailCar(carObjList);

    console.log(r2);
}

main([
    ["Toyota", "Corolla"],
    ["Toyota", "Corolla"],
    ["Toyota", "Camry"],
    ["Honda", "Accord"],
    ["Hyundai", "Sonata"],
    ["Hyundai", "SantaFe"]
]);
