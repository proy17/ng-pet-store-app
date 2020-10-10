/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PetOwnersService } from '../services/pet-owners.service';
import { PetOwnerComponent } from './pet-owner.component';

describe('PetOwnerComponent', () => {
  let component: PetOwnerComponent;
  let fixture: ComponentFixture<PetOwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PetOwnerComponent],
      providers: [PetOwnersService],
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Male" owners', () => {
    expect(component).toBeTruthy();
    expect(component.viewDataModel).toBeTruthy();
    const maleOwners = component.viewDataModel.Male;
    expect(maleOwners).toBeDefined();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('div'));
    expect(compiled.querySelector('div').textContent).toContain('Male');
  });

  it('should have "Female" owners', () => {
    expect(component).toBeTruthy();
    expect(component.viewDataModel).toBeTruthy();
    const maleOwners = component.viewDataModel.Female;
    expect(maleOwners).toBeDefined();
  });

  it('should have "Male" owners with pets as "Cat"', () => {
    expect(component).toBeTruthy();
    expect(component.petType).toEqual('Cat');
    expect(component.viewDataModel).toBeTruthy();
    const maleOwners = component.viewDataModel.Male;
    expect(maleOwners).toBeDefined();
    for (const owner of maleOwners) {
      if (!!owner.pets) {
        for (const pet of owner.pets) {
          expect(pet.type).toEqual('Cat');
        }
      }
    }
  });

  it('should have the title "Female" owners with pets as "Cat"', () => {
    expect(component).toBeTruthy();
    expect(component.petType).toEqual('Cat');
    expect(component.viewDataModel).toBeTruthy();
    const femaleOwners = component.viewDataModel.Female;
    expect(femaleOwners).toBeDefined();
    for (const owner of femaleOwners) {
      if (!!owner.pets) {
        for (const pet of owner.pets) {
          expect(pet.type).toEqual('Cat');
        }
      }
    }
  });

});
