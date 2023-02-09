import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prismaClient";
import IGetTimesRepository from "../../../interfaces/time/IGetTimesRepository";
import ITime from "../../../interfaces/ITime";

export default class GetTimesRepository implements IGetTimesRepository {
  public readonly repository: PrismaClient;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(): Promise<ITime[]> {
    const times = await this.repository.time.findMany();

    return times;
  }
}
