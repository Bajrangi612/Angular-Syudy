import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
@Input() postMessage:any;

postListMessage:any='This message is from postList component as child of post.'


  constructor() { }

  ngOnInit(): void {
  }

}
