import { IsNumber, IsString } from "class-validator";

export class CreatePartnerDto {
    @IsString()
    name : string

    @IsString()
    term : string

    @IsNumber()
    profit : number
}
