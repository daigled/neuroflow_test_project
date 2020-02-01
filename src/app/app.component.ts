import { Component, OnInit } from '@angular/core';
import { Song } from './model/song';
import { SONGS } from '../assets/audio_files';
import { SongService } from './service/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'neuroflow';
  songs: Song[];
  filteredSongs: Song[];  

  constructor(private trackService: SongService) {
  }

  async ngOnInit() {
    this.songs = await SONGS;
    this.setFilter('NONE');
  }

  setFilter(filter: string) {
    this.filteredSongs = filter === "NONE" ?
      this.songs :
      this.songs.filter(song => song.category === filter);
  }
}
