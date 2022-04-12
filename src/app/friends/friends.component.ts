import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Friend {
  constructor(
    public completed: boolean,
    public id: number,
    public title: string,
    public userId: number    
  ) {
  }
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: any;

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.httpclient.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe({
      next : response => {
        console.log(response);
        this.friends = response;
      }
    });
  }
}

