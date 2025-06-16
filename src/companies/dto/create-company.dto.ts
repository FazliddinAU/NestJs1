import { IsNumber, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    name : string

    @IsNumber()
    headcount : number

    @IsString()
    about : string
}
    