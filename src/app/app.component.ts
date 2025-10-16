import {Component, Inject, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ApiService, AppEnvironment, FileType, GoogleAnalyticsService} from 'cr-connect-workflow-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean;
  showStatus: boolean = false;
  showAlternate: boolean = true;
  statusMessage: string;
  alternateMessage: string;

  constructor(
    @Inject('APP_ENVIRONMENT') private readonly environment: AppEnvironment,
    private readonly titleService: Title,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly googleAnalyticsService: GoogleAnalyticsService,
    private readonly router: Router,
    private readonly api: ApiService,
  ) {

    const fileTypes = Object.values(FileType);
    for (const t of fileTypes) {
      const url = this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/file_types/${t}.svg`)
      this.matIconRegistry.addSvgIconInNamespace('crc', t, url);
    }
    this.titleService.setTitle(this.environment.title);
  }

  ngOnInit() {
    this.checkMessageStatus();
    this.checkMessageAlternate();
  }

  checkMessageStatus() {
    this.api.getMessageStatus().subscribe(msg => {

      if (msg?.message_value) {
        this.statusMessage = msg.message_value;
        this.showStatus = true;
      } else {
        this.showStatus = false;
      }
    })
  }

  checkMessageAlternate() {
    this.api.getMessageAlternate().subscribe(msg => {

      if (msg?.message_value) {
        this.alternateMessage = msg.message_value;
        this.showAlternate = true;
      } else {
        this.showAlternate = false;
      }
    })
  }


  reload() {
    this.loading = true;
    setTimeout(() => this.loading = false, 300);
  }

}
