import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class Home implements OnInit {
  @ViewChild('mission') mission!: ElementRef;
  @ViewChild('facts') facts!: ElementRef;
  public preview: number = 0
  public showMission: boolean = false
  public showFacts: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.onViewportScroll()
    }, 100)
  }

  public incrementPreview(): void {
    this.preview = (this.preview + 1) % 2
  }

  public decrementPreview(): void {
    if (this.preview === 0) {
      this.preview = 1
    } else {
      this.preview--
    }
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectMission = this.mission.nativeElement.getBoundingClientRect();
    const boundingRectFacts = this.facts.nativeElement.getBoundingClientRect();

    console.log('div', boundingRectFacts.top)
    console.log('div', boundingRectFacts.bottom)

    if (boundingRectMission.top >= 0 && boundingRectMission.bottom <= windowHeight + 100) {
      setTimeout(() => { this.showMission = true; }, 500);
    } 

    if (boundingRectFacts.top >= 0 && boundingRectFacts.bottom <= windowHeight + 200) {
      setTimeout(() => { this.showFacts = true; }, 500);
    }
  }
}