import asyncHandler from 'express-async-handler';


// @desc    Return model with certian description
// @route   Get /api/model/get
// @access  Public
const returnModel = asyncHandler(async (req, res) => {
    res.json({ message: 'Success' });
  });

  
  export { returnModel };