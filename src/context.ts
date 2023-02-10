import db from "./models";
import { Sequelize } from "sequelize";
import { Request, Response } from "express";

interface DBModel extends Sequelize {
  [modelName: string]: any;
}

export interface Context {
  user: any;
  db: DBModel;
}

interface ExpressContext {
  req: Request;
  res: Response;
}

export default async function context({
  req,
  res,
}: ExpressContext): Promise<Context> {
  return {
    user: req.authenticatedUser,
    db,
  };
}
