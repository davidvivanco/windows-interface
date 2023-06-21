import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {
  EventsService,
} from 'src/app/shared/services/events.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imgWidth: string;
  wallpaperBasePath: string;
  desktopBackground: { [key: string]: string };
  background: SafeStyle = '#bbefc8';
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.events.innerWidth = window.innerWidth;
    this.events.resize(this.events.innerWidth);
  }

  constructor(
    private sanitization: DomSanitizer,
    public ui: UiService,
    private events: EventsService,
    private themeService: ThemeService
  ) {
    this.wallpaperBasePath = '../../../assets/images/wallpapers/';
    this.setDesktopBackground();
    this.setIconWidth();
    this.setThemeObservable();
  }

  ngOnInit() {
  }

  private setDesktopBackground() {
    this.desktopBackground = {
      firstRule: this.wallpaperBasePath + 'figth_club.jpeg',
      fresh: this.wallpaperBasePath + 'fresh_prince.gif',
      delorean: this.wallpaperBasePath + 'delorean.jpeg',
    };
  }

  private setIconWidth() {
    this.imgWidth = this.ui.isDesktop ? '35' : '30';
  }

  private setThemeObservable() {
    this.themeService.getTheme().subscribe((theme) => {
      // this.background = this.sanitization.bypassSecurityTrustStyle(
      //   'url(' + this.desktopBackground[theme] + ')'
      // );

    });
  }
}
