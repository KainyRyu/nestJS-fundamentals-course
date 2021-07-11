import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(201).send('Get all coffees');
    // return 'Get all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This is returning #${id} coffee`;
  }

  @Post()
  create(@Body('username') body) {
    return body.username;
  }
}
