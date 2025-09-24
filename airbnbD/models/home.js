const fs = require('fs');
const path = require('path');
const reetDir = require('../utils')

const regiteredHomes = [];

module.exports = class Home {
    constructor(houseName, price, locations, rating, photos ){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save (){
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir,'data', 'homes.json');
        fs.writeFile(homeDataPath,JSON.stringfy(registeredHomes),error =>{
            console.log("File writing Conclude",error);
        })
    }

    static fetchAll (){
        return registeredHomes;
    }
}