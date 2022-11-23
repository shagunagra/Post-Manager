import { Component, OnInit } from '@angular/core';
import { HttpApiService } from 'src/app/services/http-api.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  getUserInfo: any[] = [];

  constructor(private httpSrv: HttpApiService, private userDetails: UserDetailsService) { }

  ngOnInit(): void {
    this.httpSrv.getUsers().subscribe((data: any)=>{
      this.getUserInfo.push(data);
      this.userDetails.getUserDetails(data[0].id);
    })
  }

  getUserDetails(id: any){
    this.httpSrv.getPosts(id).subscribe((data: any)=>{
      this.userDetails.getPosts.next(data);
    })
  }
}
