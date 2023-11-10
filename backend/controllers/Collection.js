import userModel from '../models/userModel.js';
import ErrorStatus from '../utils/errorStatus.js';



const getCollection = async (req, res, next) => {
    try {
      const {userName}  = req.params; 
      const user = await userModel.findOne({userName}); 
  
      if (!userName) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const collection = user.collection; 
      res.status(200).json(collection);
    } catch (error) {
      next(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
  const editCollection = async (req, res, next) => {
    try {
        const { userName } = req.params;
        const updateCollection = req.body.collection;

        if (!Array.isArray(updateCollection)) {
            return res.status(400).json({ message: 'Invalid collection data' });
        }

        const user = await userModel.findOneAndUpdate(
            { userName },
            { $push: { collection: { $each: updateCollection } } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Collection updated successfully', updatedCollection: user.collection });
    } catch (error) {
        next(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};


  const ditCollection = async (req, res, next) => {
    try {
      const { userName } = req.params;
      const updateCollection = req.body.collection;
  
      if (!Array.isArray(updateCollection)) {
        return res.status(400).json({ message: 'Invalid collection data' });
      }
  
      const user = await userModel.findOneAndUpdate({userName});
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.collection = [...user.collection, ...updateCollection];
      await user.save();
  
      res.status(200).json({ message: 'Collection updated successfully', updatedCollection: user.collection });
    } catch (error) {
      next(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  

export { getCollection, editCollection }


