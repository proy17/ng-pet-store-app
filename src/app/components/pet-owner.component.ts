import { Component, OnInit } from '@angular/core';
import Owner from '../domain/owner';
import { PetOwnersService } from '../services/pet-owners.service';

@Component({
  selector: 'app-pet-owner',
  templateUrl: './pet-owner.component.html',
  styleUrls: ['./pet-owner.component.css']
})
export class PetOwnerComponent implements OnInit {

  constructor(private petOwnerService: PetOwnersService) { }

  petType = 'Cat';
  viewDataModel = { Male: [], Female: [] };

  ngOnInit(): void {
    const thiz = this;
    this.petOwnerService
      .sendGetRequest()
      .subscribe((owners: Owner[]) => {
        for (const owner of owners) {
          if (!!owner.pets) {
            for (const pet of owner.pets) {
              if (pet.type === this.petType) {
                thiz.viewDataModel[owner.gender].push(pet.name);
              }
            }
          }
        }
      });
  }
}
