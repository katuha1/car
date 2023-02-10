const jsonfile = require('jsonfile');

const getCarDB = ()=>{
    let data = jsonfile.readFileSync('./models/car.json', (err, obj)=>{
        if(err){
            console.error(err);
            throw err;
    }
});
    return data;
};

const getCarOneDB = (id)=>{
    let data = jsonfile.readFileSync('./models/car.json', (err, obj)=>{
        if(err){
            console.error(err);
            throw err;
    }
});
if (!id) throw 'нет нужного парамтра';
    return data[id];
};

const postCarDB = (obj) => {
    let data = jsonfile.readFileSync('./models/car.json', (error, file)=>{
        if (error) {
            console.error(err);
            throw "1";
        }
    });
    let arr = [...data];
    arr.push(obj);
    //concole.log(1, arr);

    jsonfile.writeFileSync('./models/car.json', arr, (error)=>{
        if (error) {
            console.error(error);
            throw "2";
        }
    })
    return obj;
};

const updateCarDB = (id, name, model, years, price) => {
    let data = jsonfile.readFileSync('./models/car.json', (err, file) => {
        if (err) {
            console.error(err);
            throw "1";
        }
    });

    let result = data [id];
    result.name = name;
    result.name = model;
    result.name = years;
    result.name = price;

    return result
};

const deleteCarDB = (id, name, model, years, price) => {
    let data = jsonfile.readFileSync('./models/car.json', (err, file) => {
        if (err) {
            console.error(err);
            throw "1";
        }
    });

    let result = data [id];
    result.name = name;
    result.name = model;
    result.name = years;
    result.name = price;

    return result
};




module.exports={getCarDB, getCarOneDB, postCarDB,  updateCarDB, deleteCarDB};