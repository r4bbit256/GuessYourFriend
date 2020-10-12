import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private storageService: StorageService) { }

  get(): void {
    // TODO
  }

  add(): void {
    // TODO
  }

  delete(): void {
    // TODO
  }
}
