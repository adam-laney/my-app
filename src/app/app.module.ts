import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffirmationComponent } from './affirmation/affirmation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheeseComponent } from './cheese/cheese.component';
import { AffirmationBuyComponent } from './affirmation-buy/affirmation-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    AffirmationComponent,
    CheeseComponent,
    AffirmationBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'affirmations', component: AffirmationComponent },
      { path: 'cheese', component: CheeseComponent },
      { path: 'affirmation-buy', component: AffirmationBuyComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
