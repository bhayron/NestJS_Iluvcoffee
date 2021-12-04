import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action return all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffees`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `This action updates #${id} coffees`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action delete #${id} coffees`;
  }
}
