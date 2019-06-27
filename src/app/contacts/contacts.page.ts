import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  /*selectedPath = '';
 
  pages = [
    {
      title: 'Add',
      url: '/contacts/addcontact'
    },
    {
      title: 'Location',
      url: '/contacts/location'
    }
  ];*/
 
  constructor(private router: Router) {
    /*this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });*/
  }

  ngOnInit() {
  }

}
