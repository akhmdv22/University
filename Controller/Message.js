const MessageService = require('../Services/Message');
const messageService = new MessageService();
const messageErrors = require('../errorMessages/ErrorMsg');

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
        try {
            const id = req.query.id
            const result = await messageService.GetMessageById(id);
            res.send(result);
        }catch(error){
            next({status: messageErrors[error.message]?.status, message: messageErrors[error.message]?.message});
        }
        

    }
    async DeleteMessageById(req, res, next){
        try{
            const id = req.query.id
            const result = await messageService.DeleteMessageById(id);
            res.json('Ariza bazadan olib tashlandi!');
        }catch(error){
            next({status: messageErrors[error.message]?.status, message: messageErrors[error.message]?.message});
        }

    }

    async UpdateMessage(req, res, next){
        try{
            const id = req.query.id
            const employee = req.body
            const result = await messageService.UpdateMessage(id, employee);
            res.json(result);
        }catch(error){
            next({status: messageErrors[error.message]?.status, message: messageErrors[error.message]?.message});
        }

    }

}