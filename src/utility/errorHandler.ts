import {Request,Response,NextFunction } from "express";

export const errHandler=(err:Error,req :Request,res :Response,next :NextFunction)=>{
    let statusCode=200;
    let response={}
    if(err)
    {
        response={
            "message":"Error Caused.",
            "data":JSON.stringify(err.message)
       
                } 

        res.status(500)
        res.send(response);
     }
    }
   
