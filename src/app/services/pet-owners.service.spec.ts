/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetOwnersService } from './pet-owners.service';

describe('PetOwnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetOwnersService]
    });
  });

  it('should ...', inject([PetOwnersService], (service: PetOwnersService) => {
    expect(service).toBeTruthy();
  }));
});
