import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      component works and the message is {{ primaryProperty }}
    </p>
  `,
  styles: [d
  ]
})
export class ComponentsComponent implements OnInit {

  @Input()
  primaryProperty: string;

  constructor() { }

  ngOnInit(): void {
  }

}
