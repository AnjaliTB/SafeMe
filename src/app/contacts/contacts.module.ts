import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage,
    /*children: [
      {
        path: 'addcontact',
        loadChildren: './addcontact/addcontact.module#AddcontactPageModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#LocationPageModule'
      }
    ]*/
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
