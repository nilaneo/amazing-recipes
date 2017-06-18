import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Salted caramel tart', ingredients: ['salt', 'caramel', 'tart'] },
      { id: 12, name: 'Pistachio macaron' },
      { id: 13, name: 'Strawberry cheescake' },
      { id: 14, name: 'Crepes' },
      { id: 15, name: 'Brownie' },
      { id: 16, name: 'Blueberry zephyr' },
      { id: 17, name: 'Banana bread' },
      { id: 18, name: 'Cinnamon buns' },
      { id: 19, name: 'Japanese pancakes' },
      { id: 20, name: 'American cookies' }
    ];
    return {recipes};
  }
}
