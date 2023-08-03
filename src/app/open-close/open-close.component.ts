import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'closed', style({
          height: '100px', opacity: 0.8, backgroundColor: 'blue'
        })),
      state('closed', style({
        height: '100px', opacity: 0.8, backgroundColor: 'blue'
      })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ])
  ]
})
export class OpenCloseComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen
  }
}
