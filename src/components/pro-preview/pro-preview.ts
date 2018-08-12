import { Component, ViewChild, ElementRef } from '@angular/core';
import { Gesture } from 'ionic-angular';

@Component({
  selector: 'pro-preview',
  templateUrl: 'pro-preview.html'
})
export class ProPreviewComponent {

  @ViewChild('btn') btn: ElementRef
  el: HTMLElement
  content: HTMLElement
  width: number
  height: number
  screenWidth: number
  screenHeight: number
  x: number
  y: number
  minX: number
  minY: number
  maxX: number
  maxY: number

  constructor() {
  }

  ngOnInit(): void {
    this.el = this.btn.nativeElement;
    this.content = document.querySelector(".scroll-content") as HTMLElement;
    this.width = parseInt(this.getCss(this.el, "width"));
    this.height = parseInt(this.getCss(this.el, "height"));
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.x = parseInt(this.getCss(this.el, "right"));
    this.y = parseInt(this.getCss(this.el, "top"));
    this.minX = -this.width / 2;
    this.minY = -this.height / 2;
    this.maxX = this.screenWidth + this.minX;
    let tabbar = document.querySelector(".tabbar") as HTMLElement;
    let tabbarHeight = parseInt(this.getCss(tabbar, "height"));
    this.maxY = this.screenHeight + this.minY - tabbarHeight;
    this.move();
  }

  getCss(el: any, attr: string) {//这里如果用HTMLElement会说没有currentStyle属性
    return el.currentStyle ? el.currentStyle[attr] : window.getComputedStyle(el)[attr];
  }

  move(): void {
    this.el.addEventListener("touchstart", function (e) { e.preventDefault() }, false);
    this.el.addEventListener("touchmove", function (e) { e.preventDefault() }, false);
    this.el.addEventListener("panup", function (e) { e.stopPropagation() }, false);
    this.el.addEventListener("pandown", function (e) { e.stopPropagation() }, false);
    const g = new Gesture(this.el);
    g.listen();
    g.on('panmove', e => this.onPanMove(e));
    g.on('panend', e => this.onPanEnd(e));
    g.on('pointermove', e => this.onPanMove(e));
    g.on('pointerup', e => this.onPanEnd(e));
    g.on('tap', e => this.onTap(e));
  }

  onPanMove(e) {
    let X = Math.max(Math.min(this.x - e.deltaX, this.maxX), this.minX);
    let Y = Math.max(Math.min(this.y + e.deltaY, this.maxY), this.minY);
    this.el.style.right = X + "px";
    this.el.style.top = Y + "px";
    this.content.style.overflowY = "hidden";
  }

  onPanEnd(e) {
    this.x = parseInt(this.getCss(this.el, "right"));
    this.y = parseInt(this.getCss(this.el, "top"));
    this.content.style.overflowY = "scroll";
  }

  onTap(e) {

  }

}
