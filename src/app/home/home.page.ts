import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { NavController, ModalController, Platform } from 'ionic-angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  

})
export class HomePage {
  constructor(private smsVar: SMS,private callNumber: CallNumber){}
  
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('9207578743', 'I am in DANGER!!!!!',options)
      .then(()=>{
        //alert("success");
        this.callNumber.callNumber("9207578743", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
      },()=>{
      //alert("failed");
      this.callNumber.callNumber("9207578743", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
      });
  }
  /*launchLocationPage(){
    console.log('Location not set');
  }*/

  /*constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pltfrm: Platform) {

  }

  launchLocationPage(){

      /*let modal = this.modalCtrl.create(Location);

      modal.onDidDismiss((location) => {
          console.log(location);
      });

      modal.present();  
      console.log('Home');

}*/
}

