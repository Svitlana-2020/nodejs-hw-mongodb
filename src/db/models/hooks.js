export const handleSaveError = (error, doc, next) => {
    const {code, name} = error;
    error.status = (code === 11000 && name === "MongoServerError") ? 409 : 400;
        error.status = 400,
        next(error)
    };
   
// export const handleSaveError = (error, doc, next) => {
//     const { code, name } = error;
  
//     if (code === 11000 && name === "MongoServerError") {
//       error.status = 409;
//       error.message = "Duplicate key error";
//     } else {
//       error.status = 400;
//     }
  
//     next(error); 
//   };
  