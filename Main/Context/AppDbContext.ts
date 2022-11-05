import "reflect-metadata";
import { DataSource } from "typeorm";

export class AppDbContext {
    private readonly Context: DataSource;

    public constructor() {
        this.Context = new DataSource({
            type: "postgres",
        });
    }

    public GetContext(): DataSource {
        return this.Context;
    }
}