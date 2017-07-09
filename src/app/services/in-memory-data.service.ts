import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Salted caramel tart', ingredients: ['salt', 'caramel', 'tart'] },
      { id: 12, name: 'Pistachio macaron', ingredients: [] },
      { id: 13, name: 'Strawberry cheescake', ingredients: [] },
      { id: 14, name: 'Crepes', ingredients: [] },
      { id: 15, name: 'Brownie', ingredients: [] },
      { id: 16, name: 'Blueberry zephyr', ingredients: [] },
      { id: 17, name: 'Banana bread', ingredients: [] },
      { id: 18, name: 'Cinnamon buns', ingredients: [] },
      { id: 19, name: 'Japanese pancakes', ingredients: [] },
      { id: 20, name: 'American cookies', ingredients: [] }
    ];
    return {recipes};
  }
}
