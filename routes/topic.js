    import express from "express";
    import  {read,create,update,remove}  from "#models/topic";
    const router = express.Router();
    router.get("/topic/list",read)
    router.post("/topic/create", create);
    router.patch("/topic/update",update)
    router.delete("/topic/delete",remove)

    export default router;

