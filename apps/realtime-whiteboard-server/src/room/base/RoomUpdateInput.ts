/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoardWhereUniqueInput } from "../../board/base/BoardWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";
import { ParticipantUpdateManyWithoutRoomsInput } from "./ParticipantUpdateManyWithoutRoomsInput";

@InputType()
class RoomUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BoardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BoardWhereUniqueInput)
  @IsOptional()
  @Field(() => BoardWhereUniqueInput, {
    nullable: true,
  })
  board?: BoardWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ParticipantUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => ParticipantUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => ParticipantUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  participants?: ParticipantUpdateManyWithoutRoomsInput;
}

export { RoomUpdateInput as RoomUpdateInput };
