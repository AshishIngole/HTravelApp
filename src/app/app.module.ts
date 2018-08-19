import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressbarModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { AppRoutes} from './app.router'; 
import { PersonalComponent } from './personal/personal.component';
import { ReviewComponent } from './review/review.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { ShareModule } from './shared/shared.module';
import { AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,PersonalComponent, ReviewComponent, AcknowledgementComponent
  ],
  imports: [
    BrowserModule,ProgressbarModule.forRoot(),  ShareModule,HttpClientModule,
    RouterModule.forRoot(
      AppRoutes
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})


export class AppModule { }
