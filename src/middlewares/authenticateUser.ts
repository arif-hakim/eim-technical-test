import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ApolloError } from "apollo-server-express";
import { ServerConfig } from "../config";
import httpStatus from "http-status";

interface AuthenticatedUser {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      authenticatedUser?: AuthenticatedUser;
    }
  }
}

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["authorization"]?.replace("Bearer ", "");
    if (!token) throw new ApolloError("Unathorized access!");

    const data: any = jwt.verify(token, ServerConfig.JWT_SECRET);
    req.authenticatedUser = {
      userId: data.id,
    };
    next();
  } catch (err: any) {
    next();
  }
};
