import { Component } from '@angular/core';
import { INFO_ARTICLES_GENERAL } from 'src/core/articles.models';

@Component({
  selector: 'app-footer-general-info',
  templateUrl: './footer-general-info.component.html',
  styleUrls: ['./footer-general-info.component.scss']
})
export class FooterGeneralInfoComponent {

  public generalInfoItems = INFO_ARTICLES_GENERAL;
}
