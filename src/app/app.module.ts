import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { Level1Component } from './power/level-1/level-1.component';
import { Level2Component } from './power/level-2/level-2.component';
import { Level3Component } from './power/level-3/level-3.component';
import { Level4Component } from './power/level-4/level-4.component';
import { Level5Component } from './power/level-5/level-5.component';
import { Level6Component } from './power/level-6/level-6.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    Level5Component,
    Level6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
