import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interaction';

  data='sampleData anything';
  data2=1000;

  click(text:string){
     this.data=text;
  }
}
