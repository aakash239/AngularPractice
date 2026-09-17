import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
  userData:any = signal("")
  constructor(public userService:UserService, public route:ActivatedRoute){ }
  ngOnInit(){
    const data = (this.userService.userList());

    this.route.params.subscribe((params) => {
      console.log(params)    
      const filteredData = data.find((item) => item.id == params['id']);
      this.userData.set(filteredData)
    })
  }
}
