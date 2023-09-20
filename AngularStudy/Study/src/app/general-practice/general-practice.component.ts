import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-practice',
  templateUrl: './general-practice.component.html',
  styleUrls: ['./general-practice.component.css']
})
export class GeneralPracticeComponent implements OnInit {
  postArray:Array<String> =['post 1','post 2','post 3','post 4','post 5'];
  constructor() { 
    // console.log(this.postArray);
    for(let i = 0;i<this.postArray.length;i++){
      console.log(this.postArray[i])
    }
    
  }

  ngOnInit(): void {
  }
  addNewPost(){
    this.postArray.push('Post 6')
  }
  deleteByPost(post){
    let index = this.postArray.indexOf(post);
    this.postArray.splice(index,1);
  }

}
