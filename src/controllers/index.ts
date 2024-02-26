import { NextFunction ,Request,Response} from "express"

import {renameService,deleteService,createService,helloService} from "../services/index"


export const rename=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        await renameService(req,res)
        next()
    }
    catch(e){
        next(e)
    }
}

export const hello=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        await helloService(req,res)
        next()
    }
    catch(e){
        next(e)
    }
}



export const deleteFile=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        await deleteService(req,res)
        next()
    }
    catch(e){
        next(e)
    }
}



export const create=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        await createService(req,res)
        next()
    }
    catch(e){
        next(e)
    }
}
