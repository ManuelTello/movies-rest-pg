import { Router } from "express";
import { DataSource } from "typeorm";
import { IController } from "../Interfaces/IController";

export class MovieController implements IController {
    Router:Router = Router();
    Path:string = "movies";

    public constructor(context:DataSource){
        this.InitRoutes();
    }

    public InitRoutes():void {

    }
}
