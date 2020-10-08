/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PetOwnerComponent } from './components/pet-owner.component';
import { PetOwnersService } from './services/pet-owners.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PetOwnerComponent
      ], providers: [
        PetOwnersService
      ],
      imports: [
        HttpClientModule
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', waitForAsync(() => {
    const petOwnerCompoenentFixture = TestBed.createComponent(PetOwnerComponent);
    const petOwnerCompoenent = petOwnerCompoenentFixture.debugElement.componentInstance;
    expect(petOwnerCompoenent).toBeTruthy();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Pet Data'`, waitForAsync(() => {
    const petOwnerCompoenentFixture = TestBed.createComponent(PetOwnerComponent);
    const petOwnerCompoenent = petOwnerCompoenentFixture.debugElement.componentInstance;
    expect(petOwnerCompoenent).toBeTruthy();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pet Data');
  }));

  it('should render title in a h1 tag', waitForAsync(() => {
    const petOwnerCompoenentFixture = TestBed.createComponent(PetOwnerComponent);
    const petOwnerCompoenent = petOwnerCompoenentFixture.debugElement.componentInstance;
    expect(petOwnerCompoenent).toBeTruthy();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pet Data');
  }));
});
