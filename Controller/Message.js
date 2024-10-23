const MessageService = require('../Services/Message');
const messageService = new MessageService();

module.exports = class MessageController {

    async CreateMessage(req, res, next){
        let message = req.body;
        const result = await messageService.CreateMessage(message);

        if (result){
            res.send(result);
        } else {
            res.send('error');
        }
    }
    async GetAllMessages(req, res, next){
        const results = await messageService.GetAllMessages();

        if (results) {
            res.send(results);
        } else {
            res.send('error');
        }
    }
    async GetMessageById(req, res, next){
        const id = req.query.id
        const result = await messageService.GetMessageById(id);

        if (result) {
            res.send(result);
        } else {
            res.send('error');
        }

    }

    async DeleteMessageById(req, res, next){
        const id = req.query.id
        const result = await messageService.DeleteMessageById(id);

        if (result) {
            res.send('Xodim bazadan olib tashlandi.');
        } else {
            res.send('error');
        }

    }

    async UpdateMessage(req, res, next){
        const id = req.query.id
        const employee = req.body
        const result = await messageService.UpdateMessage(id, employee);

        if (result) {
            res.send(result);
        } else {
            res.send('error');
        }

    }

}