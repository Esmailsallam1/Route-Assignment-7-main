const {Router} = require("express");
const noteRouter = Router();
const {createNote,updateNote,replaceNote,updateAllNotes,deleteNote,getPaginated,getById,getByContent,getWithUser,getAggregate,deleteAll} = require("./notes.controller");

noteRouter.post("/", createNote);
noteRouter.patch("/all", updateAllNotes);
noteRouter.get("/paginate-sort", getPaginated);
noteRouter.get("/note-by-content", getByContent);
noteRouter.get("/note-with-user", getWithUser);
noteRouter.get("/aggregate", getAggregate);
noteRouter.patch("/:noteId", updateNote);
noteRouter.delete("/:noteId", deleteNote);
noteRouter.put("/replace/:noteId", replaceNote);
noteRouter.get("/:id", getById);
noteRouter.delete("/", deleteAll);

module.exports = noteRouter;