import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'addcontact', loadChildren: './addcontact/addcontact.module#AddcontactPageModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
