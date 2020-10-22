import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(id: string): string {
    return localStorage.getItem(id);
  }

  getAll(): string[] {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push( localStorage.getItem(keys[i]) );
    }

    return values;
  }

  delete(id: string): void {
    localStorage.removeItem(id);
  }

  clear(): void {
    localStorage.clear();
  }
}
