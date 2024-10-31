const MessageService = require('../Services/Message');
const messageService = new MessageService();
const messageErrors = require('../errorMessages/ErrorMsg');

module.exports = class MessageController {

    async CreateMessage(req, res, next) {
        try {
            const message = req.body;
            const result = await messageService.CreateMessage(message);
            if (result) {
                res.send(result);
            } else {
                next({ status: 400, message: "Message could not be created." });
            }
        } catch (error) {
            next({ status: messageErrors[error.message]?.status || 500, message: messageErrors[error.message]?.message || "Server Error" });
        }
    }

    async GetAllMessages(req, res, next) {
        try {
            const results = await messageService.GetAllMessages();
            if (results) {
                res.send(results);
            } else {
                next({ status: 404, message: "No messages found." });
            }
        } catch (error) {
            next({ status: messageErrors[error.message]?.status || 500, message: messageErrors[error.message]?.message || "Server Error" });
        }
    }

    async GetMessageById(req, res, next) {
        try {
            const id = req.query.id;
            const result = await messageService.GetMessageById(id);
            if (result) {
                res.send(result);
            } else {
                next({ status: 404, message: "Message not found." });
            }
        } catch (error) {
            next({ status: messageErrors[error.message]?.status || 500, message: messageErrors[error.message]?.message || "Server Error" });
        }
    }

    async DeleteMessageById(req, res, next) {
        try {
            const id = req.query.id;
            const result = await messageService.DeleteMessageById(id);
            if (result) {
                res.json({ message: "Message successfully deleted!" });
            } else {
                next({ status: 404, message: "Message not found." });
            }
        } catch (error) {
            next({ status: messageErrors[error.message]?.status || 500, message: messageErrors[error.message]?.message || "Server Error" });
        }
    }

    async UpdateMessage(req, res, next) {
        try {
            const id = req.query.id;
            const employee = req.body;
            const result = await messageService.UpdateMessage(id, employee);
            if (result) {
                res.json(result);
            } else {
                next({ status: 404, message: "Message could not be updated." });
            }
        } catch (error) {
            next({ status: messageErrors[error.message]?.status || 500, message: messageErrors[error.message]?.message || "Server Error" });
        }
    }
}
