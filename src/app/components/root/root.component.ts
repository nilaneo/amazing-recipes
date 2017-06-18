import { Component } from '@angular/core';

@Component({
  selector: 'ar-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  title = 'Amazing recipes';

  navLinks = [
    {
      path: '/home',
      label: 'Home'
    },
    {
      path: '/recipes',
      label: 'Recipes'
    }
  ];
}
