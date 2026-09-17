import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  constructor(public route:ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => console.log(params)
    )
  }
}
