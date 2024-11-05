const Message = require('../Models/Message');
const ExcelJS = require('exceljs');

module.exports = class ExcelController{
    async downloadExcel(req, res){
        try {

            const messages = await Message.find(); 

            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Messages');
    
     
            worksheet.columns = [
                { header: 'ID', key: '_id', width: 30 },
                { header: 'Ism', key: 'firstName', width: 30 },
                { header: 'Familya', key: 'lastName', width: 30 },
                { header: 'Blok', key: 'block', width: 15 },
                { header: 'Xona', key: 'room', width: 15 },
                { header: 'Ariza', key: 'message', width: 100 },
                { header: 'Sana', key: 'createdAt', width: 15 },
            ];
    
         
            messages.forEach(message => {
                worksheet.addRow({
                    _id: message._id,
                    firstName: message.firstName,
                    lastName: message.lastName,
                    block: message.block,
                    room: message.room,
                    message: message.message,
                    createdAt: message.createdAt,
                });
            });
    
            
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=messages.xlsx');
    
            await workbook.xlsx.write(res);
            res.end();
        } catch (error) {
            res.status(500).send('Error generating Excel file: ' + error.message);
        }
    }
}