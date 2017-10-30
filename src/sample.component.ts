import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  templateUrl: './sample.component.html',
})
export class SampleComponent {

  constructor() {
  }
  public helloWorld(){
    alert("1234");
  }

}
