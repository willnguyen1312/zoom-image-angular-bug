import { Component } from '@angular/core';
import { ZoomImageHoverService, ZoomImageWheelService } from '@zoom-image/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zoom-image-bug';

  constructor (private zoomImageWheelService: ZoomImageWheelService, private zoomImageHoverService: ZoomImageHoverService) {}
}
