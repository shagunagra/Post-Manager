import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  getPosts: BehaviorSubject<any>;

  constructor(private httpSrv: HttpApiService) {
    this.getPosts = new BehaviorSubject(null);
   }

  getUserDetails(id: any){
    this.httpSrv.getPosts(id).subscribe((data: any)=>{
      this.getPosts.next(data);
    })
  }
}
