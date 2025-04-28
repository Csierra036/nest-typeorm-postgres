import { ApiProperty } from "@nestjs/swagger";
export class CreateCityDto {
    @ApiProperty({
        example: 'Caracas',
        description: 'Name of the city',
    })
    name: string;

    @ApiProperty({
        example: 'Capital city of Venezuela',
        description: 'Description of the city',
    })
    description: string;

    @ApiProperty({
        example: true,
        description: 'Is the city active?',
    })
    active: boolean;
}