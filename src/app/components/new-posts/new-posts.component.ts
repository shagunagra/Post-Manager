import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.scss']
})
export class NewPostsComponent implements OnInit {

  title: any;
  content: any;

  constructor(private userDetails: UserDetailsService) { }

  ngOnInit(): void {
  }

  getTitle(event: any) {
    this.title = event.target.value;
  }

  getContent(event: any) {
    this.content = event.target.value;
  }

  saveValues(){
    let data = {
      "createdAt": new Date(),
      "Title": this.title,
      "content": this.content,
      "id": "1",
      "userId": "1",
      "author": {
        "createdAt": "2022-11-22T20:10:46.641Z",
        "name": "Eloise Weber",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/443.jpg",
        "id": "1"
      }
    }
    let currentData =  this.userDetails.getPosts.value;
    let updatedValue = [...currentData, data];
    this.userDetails.getPosts.next(updatedValue);
  }

}
