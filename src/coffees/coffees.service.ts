import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './etities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffes: Coffee[] = [
    {
      id: 1,
      name: 'Bhayron',
      brand: 'Budy Brew',
      flavors: ['Chocolate', 'Vanilla'],
    },
    {
      id: 2,
      name: 'Bhayron',
      brand: 'Budy Brew',
      flavors: ['Chocolate', 'Vanilla'],
    },
    {
      id: 4,
      name: 'Bhayron',
      brand: 'Budy Brew',
      flavors: ['Chocolate', 'Vanilla'],
    },
  ];

  findAll() {
    return this.coffes;
  }
  findOne(id: string) {
    const coffee = this.coffes.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee %${id} not found`);
    }
  }

  create(createCoffeeDto: any) {
    this.coffes.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update the existing entyty
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffes.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffes.splice(coffeeIndex, 1);
    }
  }
}
