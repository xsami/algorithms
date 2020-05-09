# Car Detail

Imagine that you're the owner of a huge dealear and your supplier has decided to send you an matrix (array of arries) which each array contain only two elements. The first element of this is the brand on the car and the second element is the model of this car.

Remeber that each array represents a car that he will be sendind to you the next month. Now you want to have a stored a structured detail of each of your new cars and model.

The following _JSON_ example represent how the structure should look like:

```
{
    "details": {
        "brands": [
            {
                "total": 2, // the amount of cars of that brand
                "name": "<brand_name>", // the name of the car brand
                "models": {
                    "<model_name>": x, // <model_name> = the name of the model and `x` is equal to the amount from this model
                    ...
                }
            },
            ...
        }
    }
}
```

### Example

Given the following matrix:
```
main(
    [
        ["Toyota", "Corolla"],
        ["Toyota", "Corolla"],
        ["Toyota", "Camry"],
        ["Honda", "Accord"],
        ["Hyundai", "Sonata"],
        ["Hyundai", "SantaFe"]
    ]
)
```
You should `return` or `log` the following:
```
{
    details: {
        brands: [
            {
                total: 3,
                name: 'Toyota',
                models: {
                    Corolla: 2,
                    Camry: 1
                }
            },
            {
                total: 1,
                name: 'Honda',
                models: {
                    Accord: 1
                }
            },
            {
                total: 2,
                name: 'Hyundai',
                models: {
                    Sonata: 1,
                    SantaFe: 1
                }
            }
        ]
    }
}
```
