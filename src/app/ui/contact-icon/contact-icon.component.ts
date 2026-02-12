import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.scss'
})
export class ContactIconComponent implements AfterViewInit {
  @Input() iconName?: string;
  @ViewChild('iconDefault', { static: true }) iconDefaultElement!: ElementRef<HTMLImageElement>;
  @ViewChild('iconHover', { static: true }) iconHoverElement!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.setupIcon();
  }

  onMouseEnter() {
    const iconDefault = this.iconDefaultElement.nativeElement;
    const iconHover = this.iconHoverElement.nativeElement;
    if (iconDefault || !iconHover) { return; }
  }

  onMouseLeave() {
    /* this.setIcon('Colored'); */
  }

  setupIcon(): void {
    const iconDefault = this.iconDefaultElement.nativeElement;
    const iconHover = this.iconHoverElement.nativeElement;
    if (!iconDefault || !iconHover || !this.iconName) { return; }

    this.setIconIntoImg(iconDefault, 'default');
    this.setIconIntoImg(iconHover, 'hover');
    
  }

  setIconIntoImg(icon: HTMLImageElement, type: 'default' | 'hover'):void{
    const path = type === "default" ? `/assets/icon/${this.iconName}Colored.svg` : `/assets/icon/${this.iconName}White.svg`;
    fetch(path).then(response => {
      if (response.ok) {
        icon.src = path;
        icon.classList.add(type === 'default' ? 'showColored' : 'showWhite')
      }
    }).catch(() => {
      return;
    });
  }

}
