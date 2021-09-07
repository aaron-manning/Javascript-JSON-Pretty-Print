# Javascript-JSON-Pretty-Print

Extremely simple.
Extremely basic.

Whitespace format your JSON! Removes evil characters that might confuse your users (, {} [] "")

### Example Input (paste into browser developer console)
```
document.write(
  "<pre>" +
    prettyPrint({
      id: "3716ffcb-5169-4696-9b5f-3df99fc3a8ff",
      arrival: {
        isDelivery: true,
        isWithin5Days: true,
        airportId: "ADL",
        deliveryAddress: {
          suburb: "Some Delivery Suburb",
          postcode: "4007",
        },
      },
      departure: {
        isPickup: true,
        airportId: "BNE",
        date: "2021-09-30",
        pickupAddress: { suburb: "Some Pickup Suburb", postcode: "4006" },
      },
      pets: [
        {
          id: "41a41726-3ff2-4163-8a47-67e031c53159",
          name: "Doggo",
          typeId: "dog",
          weight: 1,
          ageId: "8to12weeks",
          breedId: "Akita Inu",
          crate: { type: "hire" },
        },
        {
          id: "b697e981-a789-4a77-ac4f-9aa7ce7fd480",
          name: "Doggo2",
          typeId: "dog",
          weight: 2,
          ageId: "over12Years",
          breedId: "Akita Inu x",
          crate: { type: "buy" },
        },
        {
          id: "743560a3-bb51-4da5-8485-18c357265a5c",
          name: "Doggo3",
          typeId: "dog",
          weight: 3,
          ageId: "3to5months",
          breedId: "Alangu Mastiff",
          crate: { type: "own", length: 100, height: 200, width: 300 },
        },
      ],
    }) +
    "</pre>"
);
```
### Example output
```
id: 3716ffcb-5169-4696-9b5f-3df99fc3a8ff

arrival: 
  isDelivery: true
  isWithin5Days: true
  airportId: ADL
  deliveryAddress: 
    suburb: Some Delivery Suburb
    postcode: 4007


departure: 
  isPickup: true
  airportId: BNE
  date: 2021-09-30
  pickupAddress: 
    suburb: Some Pickup Suburb
    postcode: 4006


pets: 
  1: 
    id: 41a41726-3ff2-4163-8a47-67e031c53159
    name: Doggo
    typeId: dog
    weight: 1
    ageId: 8to12weeks
    breedId: Akita Inu
    crate: 
      type: hire


  2: 
    id: b697e981-a789-4a77-ac4f-9aa7ce7fd480
    name: Doggo2
    typeId: dog
    weight: 2
    ageId: over12Years
    breedId: Akita Inu x
    crate: 
      type: buy


  3: 
    id: 743560a3-bb51-4da5-8485-18c357265a5c
    name: Doggo3
    typeId: dog
    weight: 3
    ageId: 3to5months
    breedId: Alangu Mastiff
    crate: 
      type: own
      length: 100
      height: 200
      width: 300
```
