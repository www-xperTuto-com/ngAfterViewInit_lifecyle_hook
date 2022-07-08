import { Component,OnInit ,AfterViewInit ,ViewChild} from '@angular/core';

import { ChildComponent } from './child-component/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild(ChildComponent) childComp : ChildComponent;

  ngOnInit() {
        console.log('[ngOnInit] user name : ' + this.childComp?.getName());
  }

  ngAfterViewInit() {
        console.log('[ngAfterViewInit] user name : ' + this.childComp?.getName());
  }
}
