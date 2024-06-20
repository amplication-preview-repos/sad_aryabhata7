/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BoardService } from "../board.service";
import { BoardCreateInput } from "./BoardCreateInput";
import { Board } from "./Board";
import { BoardFindManyArgs } from "./BoardFindManyArgs";
import { BoardWhereUniqueInput } from "./BoardWhereUniqueInput";
import { BoardUpdateInput } from "./BoardUpdateInput";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";

export class BoardControllerBase {
  constructor(protected readonly service: BoardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Board })
  async createBoard(@common.Body() data: BoardCreateInput): Promise<Board> {
    return await this.service.createBoard({
      data: data,
      select: {
        boardOwner: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Board] })
  @ApiNestedQuery(BoardFindManyArgs)
  async boards(@common.Req() request: Request): Promise<Board[]> {
    const args = plainToClass(BoardFindManyArgs, request.query);
    return this.service.boards({
      ...args,
      select: {
        boardOwner: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async board(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    const result = await this.service.board({
      where: params,
      select: {
        boardOwner: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBoard(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() data: BoardUpdateInput
  ): Promise<Board | null> {
    try {
      return await this.service.updateBoard({
        where: params,
        data: data,
        select: {
          boardOwner: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBoard(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    try {
      return await this.service.deleteBoard({
        where: params,
        select: {
          boardOwner: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/rooms")
  @ApiNestedQuery(RoomFindManyArgs)
  async findRooms(
    @common.Req() request: Request,
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Room[]> {
    const query = plainToClass(RoomFindManyArgs, request.query);
    const results = await this.service.findRooms(params.id, {
      ...query,
      select: {
        board: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rooms")
  async connectRooms(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        connect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rooms")
  async updateRooms(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        set: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rooms")
  async disconnectRooms(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        disconnect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }
}
