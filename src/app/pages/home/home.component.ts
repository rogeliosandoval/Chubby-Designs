import { Component } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class Home {
  public preview: number = 0

  public incrementPreview(): void {
    this.preview = (this.preview + 1) % 2;
  }

  public decrementPreview(): void {
    if (this.preview === 0) {
      this.preview = 1
    } else {
      this.preview--
    }
  }
}