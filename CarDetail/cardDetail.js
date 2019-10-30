// Car "class", definition of a car 
function Car(brands, model) {
    this.brands = brands;
    this.model = model;
}

// Given a list of type Car. this function will return
// a detailed object with the summary of each brand and model
function getDetailCar(cardList) {

    let mapCars = {};

    cardList.forEach(carObj => {
        brands = carObj.brands;
        model = carObj.model;

        if (mapCars[brands] == undefined) {
            mapCars[brands] = {
                total: 1,
                name: brands,
                models: {
                    [model]: 1
                }
            };
        } else {
            mapCars[brands].total++;
            if ( mapCars[brands].models[model] == undefined) {
                mapCars[brands].models[model] = 1;
            } else {
                mapCars[brands].models[model]++;
            }
        }
    });

    return {
        details: {
            brands: mapCars
        }
    };

}

function main(list) {

    const carObjList = [];

    // Build a list of type car
    list.forEach(element => {
        carObjList.push(new Car(element[0], element[1]))
    });

    let r2 = getDetailCar(carObjList);

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
