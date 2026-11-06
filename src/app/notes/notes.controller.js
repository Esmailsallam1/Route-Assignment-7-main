const noteService = require('./notes.service');

async function createNote(req, res, next) {
    try {
        const userId = req.query.id;
        const note = await noteService.createNoteService(userId, req.body);
        res.json({ message: "Note Created", data: note });
    } catch (error) {
        next(error);
    }
}

async function updateNote(req, res, next) {
    try {
        const noteId = req.params.noteId;
        const userId = req.query.id;
        const note = await noteService.updateNoteService(noteId, userId, req.body);
        res.json({ message: "Note Updated", data: note });
    } catch (error) {
        next(error);
    }
}

async function replaceNote(req, res, next) {
    try {
        const noteId = req.params.noteId;
        const userId = req.query.id;
        const note = await noteService.replaceNoteService(noteId, userId, req.body);
        res.json({ message: "Note Replaced", data: note });
    } catch (error) {
        next(error);
    }
}

async function updateAllNotes(req, res, next) {
    try {
        const userId = req.query.id;
        const { title } = req.body;
        const result = await noteService.updateAllNotesService(userId, title);
        res.json({ message: "All Notes Updated", data: result });
    } catch (error) {
        next(error);
    }
}

async function deleteNote(req, res, next) {
    try {
        const noteId = req.params.noteId;
        const userId = req.query.id;
        const note = await noteService.deleteNoteService(noteId, userId);
        res.json({ message: "Note Deleted", data: note });
    } catch (error) {
        next(error);
    }
}

async function getPaginated(req, res, next) {
    try {
        const userId = req.query.id;
        const { page, limit } = req.query;
        const notes = await noteService.getPaginatedNotesService(userId, page, limit);
        res.json({ message: "Success", data: notes });
    } catch (error) {
        next(error);
    }
}

async function getById(req, res, next) {
    try {
        const noteId = req.params.id;
        const userId = req.query.id;
        const note = await noteService.getNoteByIdService(noteId, userId);
        res.json({ message: "Success", data: note });
    } catch (error) {
        next(error);
    }
}

async function getByContent(req, res, next) {
    try {
        const userId = req.query.id;
        const { content } = req.query;
        const note = await noteService.getNoteByContentService(userId, content);
        res.json({ message: "Success", data: note });
    } catch (error) {
        next(error);
    }
}

async function getWithUser(req, res, next) {
    try {
        const userId = req.query.id;
        const notes = await noteService.getNotesWithUserService(userId);
        res.json({ message: "Success", data: notes });
    } catch (error) {
        next(error);
    }
}

async function getAggregate(req, res, next) {
    try {
        const userId = req.query.id;
        const { title } = req.query;
        const notes = await noteService.getNotesAggregateService(userId, title);
        res.json({ message: "Success", data: notes });
    } catch (error) {
        next(error);
    }
}

async function deleteAll(req, res, next) {
    try {
        const userId = req.query.id;
        const result = await noteService.deleteAllNotesService(userId);
        res.json({ message: "All Notes Deleted", data: result });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNote,
    updateNote,
    replaceNote,
    updateAllNotes,
    deleteNote,
    getPaginated,
    getById,
    getByContent,
    getWithUser,
    getAggregate,
    deleteAll
};