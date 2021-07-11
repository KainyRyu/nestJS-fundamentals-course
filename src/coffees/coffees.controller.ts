import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'Get all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This is returning #${id} coffee`;
  }
}
