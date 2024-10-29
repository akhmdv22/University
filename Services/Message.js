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
        const result = await MessageModel.findById(id);
        if(result){
            return result
        }else{
            throw new Error('messageNotFound');
        }
    }
    async DeleteMessageById(id){
        const result = await MessageModel.findByIdAndDelete(id);
        if(result){
            return result
        }else{
            throw new Error('messageNotFound');
        }
    }

    async UpdateMessage(id, updatedMessage){
        const result = await MessageModel.findByIdAndUpdate(id, updatedMessage, {new: true});
        if(result){
            return result
        }else{
            throw new Error('messageNotFound');
        }
    }
}