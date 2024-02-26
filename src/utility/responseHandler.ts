
import {Request,Response,NextFunction } from "express";

interface Responses extends Request {
    filepath?: string,
    message:string,
    data:any
}

export const respHandler=(req: Request,res :Response,next :NextFunction)=>{

    let resp=(req?.res as unknown as Responses);

    let statusCode=200;
    let response={}

if(resp?.filepath !=undefined)
{
    res.status(statusCode)
    res.download(resp.filepath);
}
else if (req.res !=undefined || resp.data!=undefined  )
{
    statusCode=200;
    response={
        "message":resp.message,
        "data":resp.data!=undefined?resp.data:[]
          
   }
   res.status(statusCode)
   res.send(response);

}
else
{
    next()
}
}

