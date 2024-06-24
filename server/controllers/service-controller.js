const Service = require("../models/service-model");


const services = async (req, res) => {
    try {
        const response = await Service.find();
        if(!response){
            res.status(404).json({ msg: "No service found"});
            return;
        }
       return res.status(200).json({ msg : "Service found", data: response});
    } catch (error) {
        console.log(`error from server ${error}`);
    }
};

module.exports = services;