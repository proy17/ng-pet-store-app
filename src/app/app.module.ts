import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetOwnersService } from './services/pet-owners.service';
import { PetOwnerComponent } from './components/pet-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    PetOwnerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetOwnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
