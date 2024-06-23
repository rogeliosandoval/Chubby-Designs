import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class Home implements OnInit {
  @ViewChild('mission') mission!: ElementRef
  @ViewChild('facts') facts!: ElementRef
  @ViewChild('contact') contact!: ElementRef
  public preview: number = 0
  public showMission: boolean = false
  public showFacts: boolean = false
  public showContact: boolean = false
  public mobile: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.onViewportScroll()
    }, 100)

    if (window.innerWidth <= 768) {
      this.mobile = true
    }
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
    const boundingRectMission = this.mission.nativeElement.getBoundingClientRect()
    const boundingRectFacts = this.facts.nativeElement.getBoundingClientRect()
    const boundingRectContact= this.contact.nativeElement.getBoundingClientRect()

    if (boundingRectMission.top >= 0 && boundingRectMission.bottom <= windowHeight + 100) {
      setTimeout(() => { this.showMission = true; }, 500);
    } 

    if (boundingRectFacts.top >= 0 && boundingRectFacts.bottom <= windowHeight + 200) {
      setTimeout(() => { this.showFacts = true; }, 500);
    }

    if (boundingRectContact.top >= 0 && boundingRectContact.bottom <= windowHeight + 300) {
      setTimeout(() => { this.showContact = true; }, 500);
    }
  }
}