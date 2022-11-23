import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  getUserDetails: any;

  constructor(private userDetails: UserDetailsService) { }

  ngOnInit(): void {
    this.userDetails.getPosts.subscribe(((data)=>{
      this.getUserDetails = data;
    }))
  }

}
