import {bootstrap} from 'angular2/platform/browser';
import {Component} from "angular2/core";



@Component({
  selector:'sample-app',
  template: `
<div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 well" style="border-radius: 0;text-align: center">
      <h3>Welcome to {{name}}</h3>
      </div>
      <div class="col-md-3"></div>
    </div>
</div>
`
})
class SampleApp{

  name:String;

  constructor(){
    this.name="Angular 2";
  }

}

bootstrap(SampleApp);
