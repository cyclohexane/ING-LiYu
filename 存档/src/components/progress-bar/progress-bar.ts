import { Component, Input, ViewChild, ElementRef,AfterViewInit} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent implements AfterViewInit{

  @Input() percentage: number;
  @ViewChild('total') total: ElementRef;
  @ViewChild('current') current: ElementRef;
  length: number;

  constructor() {
  }

  getCss(el: any, attr: string) {
    return el.currentStyle ? el.currentStyle[attr] : window.getComputedStyle(el)[attr];
  }

  ngAfterViewInit() {
    this.length = parseInt(this.getCss(this.total.nativeElement, "width"));
    this.current.nativeElement.style.width = this.length * this.percentage * 0.01 +'px';
  }
}
