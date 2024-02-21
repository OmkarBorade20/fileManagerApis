import { Router } from "express";
import {rename,deleteFile,create}from "../controllers/index"


 const router=Router();

router.post("/rename",rename);
router.post("/delete",deleteFile);
router.post("/create",create);

export default router;