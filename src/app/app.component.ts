import { Component, OnInit, inject } from '@angular/core'
import { SharedService } from './services/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sharedService = inject(SharedService)
  public mobileNavOpen: boolean = false

  ngOnInit(): void {
    
  }

  public openNav(): void {
    if (this.mobileNavOpen === false) {
      this.mobileNavOpen = true
    } else {
      this.mobileNavOpen = false
    }
  }
}
