import { Component, OnInit ,Input,ViewChild,AfterViewInit,EventEmitter,Output} from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,AfterViewInit {
@Input() parentMessage;
message:any;
postComponnentMessage:any='This message is from post component as parent of post-list.';
outputMessage:any = 'Message from child componet via OutPut.'
@ViewChild(PostListComponent) childMessage;
  ngOnInit() {
    
  }
  constructor(){
  console.log(this.childMessage);
  }

  ngAfterViewInit(){
    console.log(this.childMessage);
    this.message = this.childMessage.postListMessage;
    // console.log(this.message);
  }
  @Output() sendMessageEvant = new EventEmitter();
  sendMessage(){
  this.sendMessageEvant.emit(this.outputMessage);    
  }




}
