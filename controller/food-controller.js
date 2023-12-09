const { post } = require('../routes/contact-routes')
const{getAllContactService, createContactService} = require('../service/contact-service');



const getAllContactService  = async(req, res) => {
    let result = await getAllContactService
    res.json({
        message : "berhasil mendapatkan data",
        data : result
    })
};


// const createMakanan = async (req, res) => {
//     const { title, price, description, image} = req.body; 
//     let createFood = await createDataMakanan({title, price, description, image});

//     res.json({
//         message: "berhasil menambahkan makanan",
//         data : createFood
//     });
// }

const createContactService = ('/', (req, res) => {
    const{name, email, message} = req.body;
    const result = createContactService(name, email, message);

    res.json({
        "message" : "berhasil menambahkan data",
        "data" : result
    })
})

module.exports = {
   getAllContactService,
   createContactService
}