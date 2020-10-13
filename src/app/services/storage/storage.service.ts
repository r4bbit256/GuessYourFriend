import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(id: string): any {
    return localStorage.getItem(id);
  }

  delete(id: string): void {
    localStorage.removeItem(id);
  }

  clear(): void {
    localStorage.clear();
  }
}
