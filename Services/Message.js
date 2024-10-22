const MessageModel = require('../Models/Message');

module.exports = class MessageService {

    async CreateMessage(message){

        const messageToAdd = new MessageModel(message);
        return await messageToAdd.save();
    }

    async GetAllMessages(){
        return await MessageModel.find({});
    }

    async GetMessageById(id){
        return await MessageModel.findById(id);
    }
    async DeleteMessageById(id){
        return await MessageModel.findByIdAndDelete(id);
    }

    async UpdateMessage(id, updatedMessage){
        return await MessageModel.findByIdAndUpdate(id, updatedMessage, {new: true});
    }
}