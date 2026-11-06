const Note = require('./notes.moduel');
const mongoose = require('mongoose');

async function createNoteInDB(noteData) {
    return await Note.create(noteData);
}

async function updateNoteInDB(noteId, userId, updateData) {
    return await Note.findOneAndUpdate(
        { _id: noteId, userId: userId },
        updateData,
        { returnDocument:"after" }
    );
}

async function replaceNoteInDB(noteId, userId, newData) {
    return await Note.findOneAndReplace(
        { _id: noteId, userId: userId },
        newData,
        { returnDocument:"after" }
    );
}

async function updateAllNotesInDB(userId, newTitle) {
    return await Note.updateMany(
        { userId: userId },
        { title: newTitle }
    );
}

async function deleteNoteFromDB(noteId, userId) {
    return await Note.findOneAndDelete({ _id: noteId, userId: userId });
}

async function getPaginatedNotesFromDB(userId, skip, limitNum) {
    return await Note.find({ userId: userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum);
}

async function getNoteByIdFromDB(noteId, userId) {
    return await Note.findOne({ _id: noteId, userId: userId });
}

async function getNoteByContentFromDB(userId, content) {
    return await Note.findOne({ 
        userId: userId, 
        content: { $regex: content, $options: 'i' } 
    });
}

async function getNotesWithUserFromDB(userId) {
    return await Note.find({ userId: userId })
        .select("title userId createdAt")
        .populate("userId", "email");
}

async function getNotesAggregateFromDB(matchQuery) {
    return await Note.aggregate([
        { $match: matchQuery },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "userInfo"
            }
        },
        { $unwind: "$userInfo" },
        {
            $project: {
                title: 1,
                content: 1,
                createdAt: 1,
                "userInfo.name": 1,
                "userInfo.email": 1
            }
        }
    ]);
}

async function deleteAllNotesFromDB(userId) {
    return await Note.deleteMany({ userId: userId });
}

module.exports = {
    createNoteInDB,
    updateNoteInDB,
    replaceNoteInDB,
    updateAllNotesInDB,
    deleteNoteFromDB,
    getPaginatedNotesFromDB,
    getNoteByIdFromDB,
    getNoteByContentFromDB,
    getNotesWithUserFromDB,
    getNotesAggregateFromDB,
    deleteAllNotesFromDB
};