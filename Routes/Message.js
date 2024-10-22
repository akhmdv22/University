const express = require('express');
const router = express.Router();
const MessageController = require('../Controller/Message');
const messageController = new MessageController();
const MessageValidator = require('../validations/Message');
const {validate} = require('express-validation');

router.post('/message/create', validate(MessageValidator.createORupdateMessageValidator), messageController.CreateMessage);
router.get('/message/all', messageController.GetAllMessages);
router.get('/message/messageByID', messageController.GetMessageById);
router.delete('/message/delete', messageController.DeleteMessageById);
router.put('/message/update', validate(MessageValidator.createORupdateMessageValidator), messageController.UpdateMessage);
module.exports = router;