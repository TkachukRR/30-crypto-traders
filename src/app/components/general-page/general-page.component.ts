import { Component } from '@angular/core';

interface Hiring {
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
export class GeneralPageComponent {
  public title = 'We’re Hiring'
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
    }
  ]
}
