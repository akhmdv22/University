const Rating = require('../Models/Rating');
const Employee = require('../Models/Employee');

module.exports = class RatingService{
    async CreateAndUpdateRating(employeeId, rating){
        try {

            // Create the rating
            const newRating = new Rating({ employeeId, rating});
            await newRating.save();
    
            // Update the employee with the new rating
            const employee = await Employee.findById(employeeId).populate('ratings');
            employee.ratings.push(newRating._id);
            
            // Calculate the new average rating
            const totalRatings = employee.ratings.length + 1; // including new rating
            const sumOfRatings = employee.ratings.reduce((sum, ratingId) => {
                const rating = await Rating.findById(ratingId);
                return sum + (rating ? rating.rating : 0);
            }, 0) + rating;
    
            employee.averageRating = sumOfRatings / totalRatings;
            await employee.save();
    
            res.status(201).json(newRating);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async GetRating(id){
        const result = await Employee.findById(id).populate('ratings');
        if(result){
            return result
        }else{
            throw new Error('notFound');
        }
    }
}