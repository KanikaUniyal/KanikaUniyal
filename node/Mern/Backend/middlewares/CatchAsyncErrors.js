module.exports = (theFunc) =>(req,res,next) =>{
    Promise.resolve(theFunc(req,res,next)).catch(next);
}
// here we are creating try and catch block 
// "success": false,
// "message": "product validation failed: name: Please enter product name",
// the above msg will be displayed in postman if we will not give product name

// thefunc is the below function in productController and here we write try catch code..
//  async (req, res, next) => {
//   const product = await Product.create(req.body);

//   res.status(201).json({
//     success: true,
//     product,
//   });
// };