const data = {
    formatted_address : "Washington Square, New York, NY 10012, Сполучені Штати Америки",
    geometry: {
        location: {
            lat: 40.7308838,
            lng: -73.997332
         },
         viewport: {
            northeast: {
               lat: 40.7333674,
               lng: -73.99379435000002
            },
            southwest: {
               lat: 40.72847220000001,
               lng: -74.00132615
            }
         }
      },
      name: "Washington Square Park"
}
//----------------------------
let newObj = copy(data)


function copy(obj){
    let out = {}

    for(let key in obj){
        if (typeof obj[key] !== 'object'){
            out[key] = obj[key]
        } else {
           out[key] = copy(obj[key])
        }
    }
    return out
}

