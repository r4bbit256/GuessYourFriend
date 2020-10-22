import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage/storage.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  friends: Card[];

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    // this.friends = this.storage.getAll();
  }

  verifyAnswer(): boolean {
    // TODO:
    return false;
  }
}
