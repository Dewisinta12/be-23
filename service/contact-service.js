const Contact = require('../models/contact-models')

const getAllContactService = async() => {
    try{
        return await Contact.findAll();
    }catch(error){
        console.log(error);
        return false;
    }
}

const createContactService = async (name, email, message) =>{
    try{
        return await Contact.create({name, email,message});
    }catch(error){
        return false;
    }
}

module.exports = {
    getAllContactService,
    createContactService
}