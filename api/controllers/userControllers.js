import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// export const createUser = async (req, res) => {
//   const user = new User(req.body);
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Add a favorite quote to the user's favorites
export const addFavorite = async (req, res) => {
    const quoteId = req.body.quoteId; // The quote ID to add to favorites
    const userId = req.payload.username; // Extracting the userId from the JWT payload

    try {
        // Using the userId from JWT payload to ensure action on the logged-in user
        const user = await User.findOneAndUpdate(
            { username: userId }, 
            { $addToSet: { favorites: quoteId } }, // $addToSet prevents duplicates
            { new: true, runValidators: true }
        ).populate('favorites'); // Optionally populate 'favorites' to return the updated list

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error adding favorite', error: error.message });
    }
};

// Remove a favorite quote from the user's favorites
export const removeFavorite = async (req, res) => {
    const quoteId = req.body.quoteId; // The quote ID to remove from favorites
    const userId = req.payload.username; // Extracting the userId from the JWT payload

    try {
        // Using the userId from JWT payload to ensure action on the logged-in user
        const user = await User.findOneAndUpdate(
            { username: userId }, 
            { $pull: { favorites: quoteId } }, // $pull removes the item from the array
            { new: true, runValidators: true }
        ).populate('favorites'); // Optionally populate 'favorites' to return the updated list

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error removing favorite', error: error.message });
    }
};


export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
