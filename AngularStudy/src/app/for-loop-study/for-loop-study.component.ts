import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-study',
  templateUrl: './for-loop-study.component.html',
  styleUrls: ['./for-loop-study.component.css']
})
export class ForLoopStudyComponent implements OnInit {
  postArray:Array<String>=['post 1','post 2','post 3','post 4','post 5'];
  objArray:Array<any> = [
    {id : 1, postTitle :'Post 1'},
    {id : 2, postTitle :'Post 2'},
    {id : 3, postTitle :'Post 3'},
    {id : 4, postTitle :'Post 4'},
    {id : 5, postTitle :'Post 5'}
  ]
  constructor() {
    for(let i = 0;i<this.postArray.length;i++){
      // console.log(this.postArray[i]);
      
    }
   }
   stepStatus:string;

  ngOnInit(): void {
  }
  addNewData(){
    this.objArray.push({id:6,postTitle:'Post 6'});
  }
  deleteOnClick(post){
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index,1);
  }
  deleteOnClickByIndexNumber(i){
    this.objArray.splice(i,1);
  }
  onClick(status){
this.stepStatus = status;
  }

  textStyle:boolean = true;

changeColor(){
  if(this.textStyle==true)
  this.textStyle =false;
else
this.textStyle = true;
}

}
