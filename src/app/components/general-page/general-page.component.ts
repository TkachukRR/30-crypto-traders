import { Component, inject, OnInit } from '@angular/core';
import { ScreenWidthService } from "../../services/screen-width.service";

export interface Hiring {
  cardTitle: string;
  position: string;
  description?: string;
  descrList?: string[];
  skillsTitle?: string;
  skills?: string[];
  contactWith: string
  hideSubInfo: boolean;
}

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss']
})
export class GeneralPageComponent implements OnInit{
  public isLaptopScreen = false;
  public title = 'We’re Hiring'
  public selectedItem: Hiring | null = null
  public hiring: Hiring[] = [
    {
      cardTitle: 'Film Editor and Creator for Trading Content',
      position: 'Hiring a Film Editor and Creator for Trading Content',
      description: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos shorts and Reels on Instagram)",
      descrList: ['You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)', 'Compensation is negotiable (DM to discuss)', 'Become a Partner'],
      skillsTitle: 'Skills Needed (Most to Least Important)',
      skills: [
        'Short Form Video Editing',
        'Lighting and Content Creation Setting',
        'Management',
        'Videography',
        'Photography',
        'Longform Video Editing'
      ],
      contactWith: 'kevin@xtrades.net',
      hideSubInfo: true
    },
    {
      cardTitle: 'Full Stack Principal Software Developer',
      position: 'Hiring a Full Stack Principal Software Developer',
      description: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos shorts and Reels on Instagram)",
      descrList: ['You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)', 'Compensation is negotiable (DM to discuss)', 'Become a Partner'],
      skillsTitle: 'Skills Needed (Most to Least Important)',
      skills: [
        'Short Form Video Editing',
        'Lighting and Content Creation Setting',
        'Management',
        'Videography',
        'Photography',
        'Longform Video Editing'
      ],
      contactWith: 'kevin@xtrades.net',
      hideSubInfo: true
    },
    {
      cardTitle: 'Sr Principal Software Engineer - C++ Programmer',
      position: 'Hiring a Sr Principal Software Engineer',
      description: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos shorts and Reels on Instagram)",
      descrList: ['You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)', 'Compensation is negotiable (DM to discuss)', 'Become a Partner'],
      skillsTitle: 'Skills Needed (Most to Least Important)',
      skills: [
        'Short Form Video Editing',
        'Lighting and Content Creation Setting',
        'Management',
        'Videography',
        'Photography',
        'Longform Video Editing'
      ],
      contactWith: 'kevin@xtrades.net',
      hideSubInfo: true
    }
  ]

  private _screenWidth = inject(ScreenWidthService)

  public ngOnInit(): void {
    this._screenWidth.getScreenWidth().subscribe((width) => {
      if (width > 375) {
        this.isLaptopScreen = true;
      } else {
        this.isLaptopScreen = false;
      }
    });
    this.selectedItem = this.hiring[0]
  }

  public onItemClick(item: Hiring | null): void {
    if (this.selectedItem?.cardTitle === item?.cardTitle && !this.isLaptopScreen) {
      console.log('1')
      this.selectedItem = null;
    }
    else {
      this.selectedItem = item;
    }
  }
}
