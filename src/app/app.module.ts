import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PetOwnerComponent } from './components/pet-owner.component';
import { PetOwnersService } from './services/pet-owners.service';


@NgModule({
  declarations: [
    AppComponent,
    PetOwnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    PetOwnersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
