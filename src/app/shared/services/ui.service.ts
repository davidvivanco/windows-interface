import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ThemeModalComponent } from '../components/modals/theme/theme.component';
import { AboutComponent } from '../components/modals/about/about.component';
import { SpotifyComponent } from '../components/modals/spotify/spotify.component';
import { MyPicturesComponent } from '../components/modals/my-pictures/my-pictures.component';
import { PhotoDetailComponent } from '../components/modals/photo-detail/photo-detail.component';
import { EventsService } from './events.service';
import { EmuleComponent } from '../components/modals/emule/emule.component';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isDesktop: boolean;
  windowsOpen: string[];
  switchThemeModal: MatDialogRef<ThemeModalComponent, any>;
  emuleModal: MatDialogRef<EmuleComponent, any>;
  aboutModal: MatDialogRef<AboutComponent, any>;
  spotifyModal: MatDialogRef<SpotifyComponent, any>;
  myPicsModal: MatDialogRef<MyPicturesComponent, any>;
  photosDetailModals: {
    [key: string]: MatDialogRef<MyPicturesComponent, any>;
  };
  animations: string[];

  constructor(private dialog: MatDialog, private events: EventsService) {
    this.photosDetailModals = {};
    this.windowsOpen = [];
    this.animations = [
      'animate__heartBeat',
      'animate__bounce',
      'animate__rubberBand',
      'animate__shakeX',
      'animate__shakeY',
      'animate__swing',
      'animate__tada',
      'animate__wobble',
      'animate__jello',
      'animate__heartBeat',
      'animate__bounceIn',
      'animate__flip',
    ];
    this.events
      .isDesktop()
      .subscribe((isDesktop) => (this.isDesktop = isDesktop));
  }

  openSwitchThemeModal() {
    this.switchThemeModal?.close();
    this.switchThemeModal = this.dialog.open(ThemeModalComponent, {
      restoreFocus: false,
      backdropClass: 'hide',
      panelClass: ['windows-window'],
    });

    this.handlerOpenWindow('computer.png', this.switchThemeModal);
  }

  openMyPicsModal() {
    const randomAnimation = this.getRandomAnimation();
    let opts: MatDialogConfig<any> = {
      restoreFocus: false,
      backdropClass: 'hide',
      panelClass: [...this.getDefaultPanelClass(), randomAnimation],
      position: {},
    };

    if (this.isDesktop) {
      opts.position = {
        left: '50%',
        bottom: '5%',
      };
    } else {
      opts = {
        ...opts,
        ...this.getMobileDefaultOpts(),
      };
    }
    this.myPicsModal?.close();
    this.myPicsModal = this.dialog.open(MyPicturesComponent, opts);
    this.handlerOpenWindow('folder.png', this.myPicsModal);
    this.handlerAfterOpenedWindow(this.myPicsModal, randomAnimation);
  }

  openAboutModal() {
    const randomAnimation = this.getRandomAnimation();
    let opts: MatDialogConfig<any> = {
      restoreFocus: false,
      backdropClass: ['hide', 'about-backdrop'],
      panelClass: [...this.getDefaultPanelClass(), randomAnimation],
    };

    if (this.isDesktop) {
      opts.position = {
        left: '20%',
      };
    } else {
      opts = {
        ...opts,
        ...this.getMobileDefaultOpts(),
      };
    }

    this.aboutModal?.close();
    this.aboutModal = this.dialog.open(AboutComponent, opts);
    this.handlerAfterOpenedWindow(this.aboutModal, randomAnimation);
    this.handlerOpenWindow('user.png', this.aboutModal);
  }

  openSpotifyModal() {
    const randomAnimation = this.getRandomAnimation();
    let opts: MatDialogConfig<any> = {
      restoreFocus: false,
      position: {},
      backdropClass: 'hide',
      panelClass: [...this.getDefaultPanelClass(), randomAnimation],
    };
    if (this.isDesktop) {
      opts = {
        ...opts,
        position: {
          left: '40%',
          top: '5%',
        },
      };
    } else {
      opts = {
        ...opts,
        ...this.getMobileDefaultOpts(),
      };
    }
    this.spotifyModal?.close();
    this.spotifyModal = this.dialog.open(SpotifyComponent, opts);
    this.handlerAfterOpenedWindow(this.spotifyModal, randomAnimation);
    this.handlerOpenWindow('spotify-icon.png', this.spotifyModal);
  }

  openPhotoDetailModal(fileName: string) {
    const randomAnimation = this.getRandomAnimation();
    const position = this.getPhotoDetailPosition(fileName);
    this.photosDetailModals[fileName]?.close();
    this.photosDetailModals[fileName] = this.dialog.open(PhotoDetailComponent, {
      restoreFocus: false,
      position,
      height:
        fileName === 'img_2.jpeg' ||
        fileName === 'selfie_jiujitsu.jpg' ||
        fileName === 'selfie.jpeg'
          ? '580px'
          : '380px',
      data: { fileName },
      backdropClass: 'hide',
      panelClass: [...this.getDefaultPanelClass(), randomAnimation],
    });
    this.handlerAfterOpenedWindow(
      this.photosDetailModals[fileName],
      randomAnimation
    );
  }

  openEmuleModal() {
    let opts: MatDialogConfig<any> = {
      restoreFocus: false,
      position: {},
      backdropClass: 'hide',
      panelClass: [...this.getDefaultPanelClass()],
    };
    if (this.isDesktop) {
      opts = {
        ...opts,
        position: {
          left: '25%',
          top: '5%',
        },
      };
    } else {
      opts = {
        ...opts,
        ...this.getMobileDefaultOpts(),
      };
    }
    this.emuleModal?.close();
    this.emuleModal = this.dialog.open(EmuleComponent, opts);
    this.handlerOpenWindow('emule.png', this.emuleModal);
  }

  private handlerOpenWindow(
    windowLabel: string,
    dialog: MatDialogRef<any, any>
  ) {
    this.windowsOpen = this.windowsOpen.filter((ele) => ele !== windowLabel);
    if (this.windowsOpen.length < 11) this.windowsOpen.push(windowLabel);
    dialog.afterClosed().subscribe(() => {
      console.log(windowLabel);
      this.windowsOpen = this.windowsOpen.filter((ele) => ele !== windowLabel);
    });
  }

  private handlerAfterOpenedWindow(
    dialog: MatDialogRef<any, any>,
    randomAnimation: string
  ) {
    dialog.afterOpened().subscribe(() => {
      setTimeout(() => {
        dialog.removePanelClass(['animate__animated', randomAnimation]);
      }, 1000);
    });
  }

  private getPhotoDetailPosition(fileName: string) {
    let position;

    switch (fileName) {
      case 'img_1.jpeg':
        position = {
          left: '50%',
          bottom: '10%',
        };
        break;
      case 'img_2.jpeg':
        position = {
          left: '20%',
          bottom: '5%',
        };
        break;
      case 'img_3.jpeg':
        position = {
          right: '10%',
          top: '20%',
        };
        break;
      case 'img_4.jpeg':
        position = {
          right: '10%',
          top: '10%',
        };
        break;

      default:
        break;
    }

    return position;
  }

  private getMobileDefaultOpts() {
    return {
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh',
    };
  }

  private getDefaultPanelClass(): string[] {
    return ['windows-window', 'animate__animated'];
  }

  private getRandomAnimation(): string {
    const index = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    return this.animations[index];
  }
}
