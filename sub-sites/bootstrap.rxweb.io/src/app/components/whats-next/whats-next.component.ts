import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-whats-next',
    templateUrl: './whats-next.component.html'
})
export class WhatsNextComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    pageTitle:any = {"title":"What's Next","subLink":null}

    constructor(private applicationBroadcaster: ApplicationBroadcaster) {      
    }

    ngOnInit() {
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
        this.showComponent = true;
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = document.documentElement.scrollTop;
         if(windowScroll >= 50){
               this.sticky = true;
          } else {
              this.sticky = false;
          }
    }
}