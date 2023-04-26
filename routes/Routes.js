import express from "express";
import {data1,data2,data3,data4,data5} from "../controller/controller.js";

const router=express();

router.get("/data1",data1);
router.get("/data2",data2);
router.get("/data3",data3);
router.get("/data4",data4);
router.get("/data5",data5);


export default router;