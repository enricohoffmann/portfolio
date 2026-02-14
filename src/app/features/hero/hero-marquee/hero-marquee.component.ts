import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-hero-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-marquee.component.html',
  styleUrl: './hero-marquee.component.scss'
})
export class HeroMarqueeComponent implements AfterViewInit {

  private resizeObserver?: ResizeObserver;
  private readonly DEFAULT_PX_PER_SECOND: number = 80;
  private pxPerSecond : number = 80;
  public copies: number[] = [0, 1];


  marqueeTextArrayEN: Array<string> = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Tübingen',
    'Open to work',
  ];

  @ViewChild('track', { static: true }) trackElement!: ElementRef<HTMLElement>;
  @ViewChildren('group') groupElements!: QueryList<ElementRef<HTMLElement>>;
  @Input() marqueeFontSize: number = 32;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  /**
   * @description This lifecycle hook is called after the component's view has been fully initialized. It performs several asynchronous operations to set up the marquee animation. 
   * First, it calculates the pixels per second for the animation based on the marqueeFontSize input property. Then, it waits for the next animation frame to ensure that the DOM is fully rendered. 
   * If the browser supports the Font Loading API, it waits for all fonts to be loaded before proceeding. After another animation frame, it calls the updateCopiesAndShift method to calculate the necessary copies and set the appropriate CSS properties for the track element. 
   * Finally, it sets up a ResizeObserver to monitor changes in the size of the section and the first group of text, allowing the marquee animation to adapt to changes in the viewport size or text length.
   * @returns {Promise<void>} This method returns a promise that resolves when all asynchronous operations are complete and the marquee animation is set up and ready to run.
   */
  async ngAfterViewInit(): Promise<void> {

    this.calculatePxPerSeconds();

    await new Promise(requestAnimationFrame);
    
    if(document.fonts?.ready){
      await document.fonts.ready;
    }

    await new Promise(requestAnimationFrame);
    this.updateCopiesAndShift();
    this.setupResizeObserver();

  }

  /**
   * @description This method updates the number of copies needed for the marquee animation and sets the appropriate CSS properties for the track element. 
   * It retrieves the necessary HTML elements, calculates the width of the first group of text, and determines the number of copies needed based on the width of the section. 
   * The method then updates the copies array and sets the CSS properties for the track element, including the shift and duration of the animation. 
   * This method is essential for ensuring that the marquee animation functions correctly and adapts to changes in the size of the viewport or the length of the text.
   * @returns {void}
   */
  private updateCopiesAndShift(): void {
    const htmlElements = this.getHtmlElements();
    if (!htmlElements) { return; }

    const [firstGroup, track, section] = htmlElements;

    const currentGroupWidth = this.reCalculateCopieArray(firstGroup, section);

    this.changeDetectorRef.detectChanges();
    const durationTime = this.calculateDurationTime(firstGroup);

    requestAnimationFrame(() => {
      track.style.setProperty('--trackShift', `${currentGroupWidth}px`);
      track.style.setProperty('--duration', `${durationTime}s`);
      track.style.setProperty('--marqueeFontSize', `${this.marqueeFontSize}px`);
      track.classList.add('is-ready');
    });
  }


  /**
   * @description This method retrieves the necessary HTML elements for the marquee animation, including the first group of text, the track element, and the section element. 
   * It checks if these elements exist and returns them as an array. If any of the elements are missing, it returns null. 
   * This method is essential for ensuring that the marquee animation has access to the required elements to function correctly.
   * @returns {Array<HTMLElement> | null}
   */
  private getHtmlElements(): Array<HTMLElement> | null {
    const firstGroup = this.groupElements.first?.nativeElement;
    const track = this.trackElement.nativeElement;
    const section = track.parentElement as HTMLElement;

    if (!firstGroup || !track || !section) { return null; }

    return [firstGroup, track, section];
  }

  /**
   * @description This method calculates the number of copies needed for the marquee animation based on the width of the first group of text and the width of the section. 
   * It first calculates the width of the first group of text using the scrollWidth property and the width of the section using the clientWidth property. 
   * Then, it determines the number of copies needed by dividing the total width of the view (section) plus the width of the first group by the width of the first group. 
   * The method updates the copies array with the necessary number of copies and returns the width of the first group, which is used to set the shift for the marquee animation.
   * This method is crucial for ensuring that there are enough copies of the text to create a seamless scrolling effect in the marquee, regardless of the size of the viewport or the length of the text.
   * @param firstGroup 
   * @param section 
   * @returns {Number} This method calculates the width of the first group of text and the width of the section. It then determines the number of copies needed for the marquee by dividing the total width of the view (section) plus the width of the first group by the width of the first group. The method returns the width of the first group, which is used to set the shift for the marquee animation.
   * This method is essential for ensuring that there are enough copies of the text to create a seamless scrolling effect in the marquee, regardless of the size of the viewport or the length of the text.
   */
  private reCalculateCopieArray(firstGroup: HTMLElement, section: HTMLElement): number {
    const groupWidth = Math.ceil(firstGroup.scrollWidth);
    const viewWidth = Math.ceil(section.clientWidth);

    const neededGroups = Math.max(2, Math.ceil((viewWidth + groupWidth) / groupWidth) + 1);
    this.copies = Array.from({ length: neededGroups }, (_, i) => i);
    return groupWidth;
  }


  /**
   * @description This method sets up a ResizeObserver to monitor changes in the size of the section and the first group of text. 
   * When the size of either the section or the first group changes, the updateCopiesAndShift method is called to recalculate the number of 
   * copies needed for the marquee and to update the shift and duration of the animation accordingly.
   * @returns {Void} This method sets up a ResizeObserver to monitor changes in the size of the section and the first group of text.
   */
  private setupResizeObserver(): void{
    const htmlElements = this.getHtmlElements();
    if (!htmlElements) { return; }

    const [firstGroup, track, section] = htmlElements;

    const update = () => this.updateCopiesAndShift();

    this.resizeObserver = new ResizeObserver(update);
    this.resizeObserver.observe(section);
    this.resizeObserver.observe(firstGroup);
  }

  /**
   * @description This method calculates the duration time for the marquee animation based on the width of the first group of text and the pxPerSecond value. 
   * The duration time is determined by dividing the width of the first group by the pxPerSecond value, which represents the speed of the animation in pixels per second. 
   * This method is used to ensure that the animation duration is consistent with the speed defined by the pxPerSecond value, allowing for a smooth and visually appealing marquee effect.
   * @param firstGroup - HtmlElement 
   * @returns {Number} Number representing the duration time for the marquee animation in seconds. 
   * This value is calculated by dividing the width of the first group of text by the pxPerSecond value, which determines the speed of the animation in pixels per second.
   */
  calculateDurationTime(firstGroup: HTMLElement): number{
    const groupWidth = Math.round(firstGroup.scrollWidth);
    return groupWidth / this.pxPerSecond;
  }

  /**
   * @description This method is deprecated and should not be used. The pxPerSecond value is now calculated based on the marqueeFontSize input property. 
   * Please use the calculateDurationTime method instead to get the duration time based on the current pxPerSecond value.
   * @returns {Number} Number of pixels per second for the marquee animation. This value is calculated based on the marqueeFontSize input property, with a default value of 80 if the font size is not valid.
   */
  calculatePxPerSeconds(){
    const size = Number(this.marqueeFontSize);
    if(!Number.isFinite(size) || size <= 0){
      return this.DEFAULT_PX_PER_SECOND;
    }

    return size * 2.5;

  }

  /**
   * @description Disconnect the ResizeObserver when the component is destroyed to prevent memory leaks and unnecessary observations.
   */
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

}

