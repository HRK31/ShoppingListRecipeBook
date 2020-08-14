import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppinglistrecipebook';

  loadedvalue  = 'recipe';

  onNavigate(value: string){
    this.loadedvalue = value;
  }
}
