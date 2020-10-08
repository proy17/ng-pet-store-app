/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PetOwnersService } from './pet-owners.service';
import { HttpClientModule } from '@angular/common/http';
import Owner from '../domain/owner';
import { environment } from '../../environments/environment';

describe('PetOwnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetOwnersService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should fetch people with their pets', inject([PetOwnersService], async (service: PetOwnersService) => {
    expect(service).toBeTruthy();
    const owners: Owner[] = await service.sendGetRequest()
      .toPromise();
    expect(owners).toBeDefined();
    expect(owners.length).toBeGreaterThan(0);
  }));

  it('should thorw error when fetching people', inject([PetOwnersService], async (service: PetOwnersService) => {
    expect(service).toBeTruthy();
    const correctUrl = environment.apiPeopleUrl;
    environment.apiPeopleUrl = null;
    try {
      await service.sendGetRequest()
        .toPromise();
    } catch (error) {
      expect(error).toBeDefined();
    }
    environment.apiPeopleUrl = correctUrl;
  }));
});
