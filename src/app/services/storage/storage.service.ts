import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(id: string): T {
    return JSON.parse(localStorage.getItem(id)) as T;
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
