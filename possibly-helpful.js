// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndDelete(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })