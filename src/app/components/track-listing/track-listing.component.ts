import { Component, Input } from '@angular/core';
import { Song } from 'src/app/model/song';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'track-listing',
  templateUrl: './track-listing.component.html',
  styleUrls: ['./track-listing.component.scss']
})
export class TrackListingComponent {

  @Input() track: Song;
  showFullDescription: boolean;
  audioSourceIsValid: boolean = true;
  audio = new Audio();
  faPlay = faPlay;
  faPause = faPause;
  icon = faPlay;
  isPlaying = false;

  constructor() {
    this.showFullDescription = false;
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.onerror = () => {
      console.error(`Error detecterd on track ${this.track.label}; disabling audio`);
      this.audioSourceIsValid = false;
    }
    this.audio.src = this.track.url;
    this.audio.load();
  }

  showHideDescription() {
    this.showFullDescription = !this.showFullDescription
  }

  // audioSrcError(title: string) {
    
  // }

  playPauseAudio() {
    if ( this.isPlaying ) {
      this.audio.pause();
      this.icon = faPlay;
      this.isPlaying = false;
    } else {
      this.audio.play();
      this.icon = faPause;
      this.isPlaying = true;
    }
  }

}
