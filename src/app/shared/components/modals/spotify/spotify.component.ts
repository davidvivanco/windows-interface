import { Component, ViewChild } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent {
  audioPath: string;
  audioControl: any;
  audioBasePath: string;
  avatarBasePath: string;
  audioIconPath: string;
  audioData: { path: string; artist: string; song: string; avatar: string }[];

  constructor(public ui: UiService) {
    this.audioIconPath = './assets/icons/cd-icon.png';
    this.avatarBasePath = './assets/images/avatars/';
    this.audioBasePath = './assets/audio/';
    this.audioData = [
      {
        artist: 'Fugees',
        song: 'Killing me softly',
        path: 'killing_me_softly.mp3',
        avatar: 'fugees.jpeg',
      },
      {
        artist: 'Bruno Mars',
        song: '24 Magic',
        path: 'bruno_mars_24K.mp3',
        avatar: 'bruno_mars.jpeg',
      },
    ];
  }

  close() {
    this.ui.spotifyModal.close();
  }

  play(pathFile: string) {
    if (this.audioPath) this.audioControl?.pause();
    this.audioControl = document.getElementById('audio');
    this.audioPath = this.audioBasePath + pathFile;
    setTimeout(() => {
      this.audioControl?.play();
    });
  }
}
