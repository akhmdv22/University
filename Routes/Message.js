const express = require('express');
const router = express.Router();
const MessageController = require('../Controller/Message');
const messageController = new MessageController();
const MessageValidator = require('../validations/Message');
const {validate} = require('express-validation');
const { adminRole } = require('../middlewares/auth');

// +userRole

router.post('/message/create', validate(MessageValidator.createORupdateMessageValidator), messageController.CreateMessage);
router.get('/message/all', adminRole, messageController.GetAllMessages);
router.get('/message/messageByID', adminRole, messageController.GetMessageById);
router.delete('/message/delete', adminRole, messageController.DeleteMessageById);
router.put('/message/update', validate(MessageValidator.createORupdateMessageValidator), messageController.UpdateMessage);
module.exports = router;