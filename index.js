const fs = require('fs');


const unv = 'unvData/dina_globalforest.geojson'; //new unv data
const current = 'currentData/hex5.geojson'; //our current data in geojson format - before tiles


let rawUnvdata = fs.readFileSync(unv)
let rawCurrentdata = fs.readFileSync(current)

// if admin1 === GID_1
// if admin2 === GID_2

let unvData = JSON.parse(rawUnvdata)
let currentData = JSON.parse(rawCurrentdata)
let counter = 0;
//console.log(student)

//console.log(currentData.features.length)

for (var x in currentData.features) {

    

    for (var y in unvData.features) {

        if(currentData.features[x].properties.hexid === unvData.features[y].properties.hexid) {

            //console.log(typeof(currentData.features[x].properties))
            currentData.features[x].properties = {...currentData.features[x].properties, ...unvData.features[y].properties};
            break;

        }
    }

    counter = counter + 1;
   


    if(counter === currentData.features.length) {
        console.log(counter);
        console.log('---')
        console.log(currentData.features.length)
        writeToJson()

    }

}

function writeToJson() {
    //console.log(currentData)
    let writeable = JSON.stringify(currentData)
    fs.writeFileSync('newData.geojson', writeable);

}







