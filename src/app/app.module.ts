import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CustomCheckboxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
