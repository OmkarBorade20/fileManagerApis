import { Router } from "express";
import {rename,deleteFile,create,hello}from "../controllers/index"
import { errHandler } from "../utility/errorHandler";
import { respHandler } from "../utility/responseHandler";


 const router=Router();

router.get("/hello",hello);
router.post("/rename",rename);
router.post("/delete",deleteFile);
router.post("/create",create);


router.use(respHandler);
router.use(errHandler);
export default router;