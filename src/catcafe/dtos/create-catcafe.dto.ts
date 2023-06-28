import { IsString } from "class-validator";

export class CreateCatCafeDto{
    @IsString()
    customer_name: string;

    @IsString()
    customer_id: string;

    @IsString()
    customer_order: string;

    @IsString()
    customer_orderQ: string;

}