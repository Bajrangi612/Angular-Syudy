import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
bool:boolean = false;
userName :String;
textValue:string='This message is coming from component';
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(){
    console.log('Button click function called..');
    
  }
  onKeyup($event){
    // console.log('onKeyup function working');
    if($event.keyCode == 13)
    console.log('Enter key pressed..');
  }
  onKeyup1(){
    // console.log('onKeyup function working');
    
    console.log('Enter key pressed..');
  }
  onClick2($event){
    console.log($event.target.value);
    
  }
  onClick3(username){
    console.log(username);
    
  }
  onclick4(){
    console.log(this.userName);
    
  }
  onClick5(){
    console.log(this.textValue);
    
  }

}
