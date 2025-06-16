import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    ismi : string

    @IsNumber()
    yoshi : number

    @IsString()
    kasbi : string
}
