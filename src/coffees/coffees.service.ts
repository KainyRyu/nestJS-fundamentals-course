import { Coffee } from './entities/coffee.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'new coffee',
      brand: 'Starbucks',
      flavour: 'bitter',
    },
  ];
}
