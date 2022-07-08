import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-child',
  template: `<div> Here is the user name: {{ user?.name }}</div>`,
})

export class ChildComponent implements OnInit{
 public user: any


  ngOnInit(){
   // we initialize the user name
   this.user = {
   name : 'XpertTuto.com'
   }
  }


  public getName(): string{
  return this.user?.name;
  }
}
