import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  fromChildComponent:string;
  title = 'AngularProjectNew';
  parentMessage:any='Message from app component as parent of all';
  reciveMessage($event){
// console.log($event);
this.fromChildComponent = $event;
  }

  imgUrl:string ='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';




 
 



}
