import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    
    @Min(1)
    @IsPositive()
    @IsInt()
    no: number;
    
    @MinLength(1)
    @IsString()
    name: string;
}
