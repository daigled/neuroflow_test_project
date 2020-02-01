import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TrackListingComponent } from './components/track-listing/track-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackListingComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
