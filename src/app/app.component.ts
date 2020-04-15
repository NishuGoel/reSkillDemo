import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I am the parent Component passing into child one';

  displayChildResult() {
    alert('Child component reacts!');
  }
}
