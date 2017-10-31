import { Component, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('chatMessagesContainer') private scrollContainer: ElementRef;
  title = 'app';

  ngAfterViewChecked(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  } catch (err) { }
  }
}
