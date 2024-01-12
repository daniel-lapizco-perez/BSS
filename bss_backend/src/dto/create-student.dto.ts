import { IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}