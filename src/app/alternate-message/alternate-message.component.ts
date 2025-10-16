import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alternate-message',
  templateUrl: './alternate-message.component.html',
  styleUrls: ['./alternate-message.component.scss']
})
export class AlternateMessageComponent  {
  @Input() alternateMessage: string;
}
