import { Injectable } from '@angular/core';
import { Song } from '../model/song';
import { SONGS } from '../../assets/audio_files';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(): Promise<Song[]> {
    return of(SONGS).toPromise();
  }
}
