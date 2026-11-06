const noteRepo = require('./notes.repository');
const mongoose = require('mongoose');

async function createNoteService(userId, noteData) {
    const note = await noteRepo.createNoteInDB({ ...noteData, userId });
    return note;
}

async function updateNoteService(noteId, userId, updateData) {
    const note = await noteRepo.updateNoteInDB(noteId, userId, updateData);
    if (!note) throw new Error("Note not found or unauthorized");
    return note;
}

async function replaceNoteService(noteId, userId, newData) {
    const note = await noteRepo.replaceNoteInDB(noteId, userId, { ...newData, userId });
    if (!note) throw new Error("Note not found or unauthorized");
    return note;
}

async function updateAllNotesService(userId, newTitle) {
    const result = await noteRepo.updateAllNotesInDB(userId, newTitle);
    return result;
}

async function deleteNoteService(noteId, userId) {
    const note = await noteRepo.deleteNoteFromDB(noteId, userId);
    if (!note) throw new Error("Note not found or unauthorized");
    return note;
}

async function getPaginatedNotesService(userId, page, limit) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 3;
    const skip = (pageNum - 1) * limitNum;

    const notes = await noteRepo.getPaginatedNotesFromDB(userId, skip, limitNum);
    return notes;
}

async function getNoteByIdService(noteId, userId) {
    const note = await noteRepo.getNoteByIdFromDB(noteId, userId);
    if (!note) throw new Error("Note not found or unauthorized");
    return note;
}

async function getNoteByContentService(userId, content) {
    const note = await noteRepo.getNoteByContentFromDB(userId, content);
    if (!note) throw new Error("Note not found");
    return note;
}

async function getNotesWithUserService(userId) {
    const notes = await noteRepo.getNotesWithUserFromDB(userId);
    return notes;
}

async function getNotesAggregateService(userId, searchTitle) {
    const matchQuery = { userId: new mongoose.Types.ObjectId(userId) };
    if (searchTitle) {
        matchQuery.title = { $regex: searchTitle, $options: 'i' };
    }
    const notes = await noteRepo.getNotesAggregateFromDB(matchQuery);
    return notes;
}

async function deleteAllNotesService(userId) {
    const result = await noteRepo.deleteAllNotesFromDB(userId);
    return result;
}

module.exports = {
    createNoteService,
    updateNoteService,
    replaceNoteService,
    updateAllNotesService,
    deleteNoteService,
    getPaginatedNotesService,
    getNoteByIdService,
    getNoteByContentService,
    getNotesWithUserService,
    getNotesAggregateService,
    deleteAllNotesService
};