const Employee = require('../Models/Employee');


module.exports = class RatingController {
    
    async addRatings(req, res){
        const { rating } = req.body;
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).send('Employee not found.');

        employee.ratings.push({ rating });
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error.message);
    }
    }
    async getRatings(req, res){
        try {
            const employee = await Employee.findById(req.params.id);
            if (!employee) return res.status(404).send('Employee not found.');
    
            const totalRatings = employee.ratings.length;
            const averageRating = totalRatings > 0
                ? employee.ratings.reduce((sum, r) => sum + r.rating, 0) / totalRatings
                : 0;
            const result = Math.round(averageRating);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
   
}