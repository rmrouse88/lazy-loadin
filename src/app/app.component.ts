import { Component, ComponentFactoryResolver, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, Injector, ComponentFactory } from '@angular/core';
import { ComponentsComponent } from 'components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-loadin';

  constructor(private cfr: ComponentFactoryResolver,
    private injector: Injector) {

  }

  @ViewChild("bigTemplate", { read: ViewContainerRef }) bigTemplate: ViewContainerRef;

  async onClick(e: Event) {
    console.log('someone been clicking!!');
    const { ComponentsComponent } = await import('components');
    let cf: ComponentFactory<ComponentsComponent> = this.cfr.resolveComponentFactory(ComponentsComponent);
    
    this.bigTemplate.clear();
    let { instance }: any= this.bigTemplate.createComponent(cf, null, this.injector);
    instance.primaryProperty="FUCKKKKK";
    

  }
}
