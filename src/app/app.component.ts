import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 date;

 title(title: any) {
   throw new Error('Method not implemented.');
 }

 constructor ( public translate:TranslateService,
               public datepipe: DatePipe){
                 
    translate.addLangs(['en','fr','hi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/ ) ? browserLang : 'en')
   
   
 }
 myFunction(){
  this.date=new Date();
  let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
 }

}


