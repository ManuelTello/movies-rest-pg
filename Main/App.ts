import { AppDbContext } from "./Context/AppDbContext";
import express, { Application, NextFunction, Request, Response } from "express";
import { IController } from "./Interfaces/IController";

class Server {
	public static Instance: Server;
	private readonly Application: Application = express();

	private constructor() { }

	public static GetServerInstance(): Server {
		if (!Server.Instance) {
			Server.Instance = new Server();
		}
		return Server.Instance;
	}

	public StartServer(app_context: AppDbContext): void {
		const context = app_context.GetContext();
		context.initialize();

		this.InitializeRouters([

		]);
	}

	public InitializeRouters(controllers: Array<IController>): void {
		controllers.forEach(({ Router, Path }) => this.Application.use("/"+Path, Router));

		this.Application.use((err: Error, req: Request, res: Response, next: NextFunction) => {
			console.log("error: \n", err.message);
		});
	}
}


Server.GetServerInstance().StartServer(new AppDbContext());
