import { Request, Response } from "express";
import Fs from "fs";
import fsSync from "fs/promises";
import path from "path";



interface ApiResponse{
  resp:{
    message:string;
    data:any
  }
 
}
type Indexed = {
  [key: string]: any;
};

export const helloService=async (req:Indexed,res:Response)=>{

  // let rep:ApiResponse ={"resp":{"message":"Hello","data":[]}};
  req.res.message="Hello";
  req.res.data=[];
  
  return req;


}

export const renameService = async (req: Request, res: Response) => {
  let input = req.body;
  let ResourceDes = path.join(__dirname, "..", "..", "Resource");
  console.log("Destination", ResourceDes);
  let oldFile: string = path.join(ResourceDes, input.oldname);
  let newFile: string = path.join(ResourceDes, input.newname);

  try {
    //check if path is valid and file exists.
    if (!Fs.existsSync(oldFile))
      return res.status(200).send(`${oldFile} : is not a valid File`);

    //check if it is a directory of file both inputs must be same..
    let isDir_old = Fs.lstatSync(oldFile).isDirectory();
    //let isDir_new=Fs.lstatSync(newFile).isDirectory()

    //check if it is a directory.
    if (isDir_old && input.newname.includes("/"))
      return res
        .status(200)
        .send(`New Directory Name Must be a String Only and Not A Directory.`);

    await fsSync.rename(oldFile, newFile);
  } catch (e) {
    console.log(e);
    
  }

  res.send({ message: "File Renamed SucessFully.!" });
};

export const deleteService = async (req: Request, res: Response) => {
  let input = req.body;
  let ResourceDes = path.join(__dirname, "..", "..", "Resource");
  console.log("Destination", ResourceDes);

  let oldFile: string = path.join(ResourceDes, input.path);

  try {
    //check if path is valid and file exists.
    if (!Fs.existsSync(oldFile))
      return res.status(200).send(`${oldFile} : is not a valid File`);
    Fs.rmSync(oldFile, { recursive: true });
  } catch (e) {
    console.log(e);
  }

  res.send({ message: "File Deleted SucessFully.!" });
};

export const createService = async (req: Request, res: Response) => {
  let input = req.body;
  let ResourceDes = path.join(__dirname, "..", "..", "Resource");
  console.log("Destination", ResourceDes);

  let filePath: string = path.join(ResourceDes, input.path);

  try {
    //if no directory present this will create a new directory.
    if (!Fs.existsSync(filePath)) {
      Fs.mkdirSync(filePath, { recursive: true });
    } else {
      return res.status(200).send("File Path or Directory Already Exists.");
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ message: "File Directory Created SucessFully.!" });
};
