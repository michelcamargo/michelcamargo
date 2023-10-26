import githubIcon from "@/assets/svg/social/github-outlined.svg";
import instagramIcon from "@/assets/svg/social/instagram-outlined.svg";
import linkedinIcon from "@/assets/svg/social/linkedin-inner.svg";
import { CustomContentType } from "@/lib/content";

const STATIC_SOCIAL_LINKS: Array<CustomContentType> = [
  {
    key: 'social-instagram',
    children: [
      {
        key: 'label',
        content: 'Instagram'
      },
      {
        key: 'link',
        content: 'https://instagram.com/michelcamargo'
      },
      {
        key: 'icon',
        content: instagramIcon.src
      },
      {
        key: 'target',
        content: '_blank'
      },
    ]
  },
  {
    key: 'social-linkedin',
    children: [
      {
        key: 'label',
        content: 'LinkedIn'
      },
      {
        key: 'link',
        content: 'https://www.linkedin.com/in/michelscamargo/'
      },
      {
        key: 'icon',
        content: linkedinIcon.src
      },
      {
        key: 'target',
        content: '_blank'
      },
    ]
  },
  {
    key: 'social-github',
    children: [
      {
        key: 'label',
        content: 'GitHub'
      },
      {
        key: 'link',
        content: 'https://github.com/michelcamargo/'
      },
      {
        key: 'icon',
        content: githubIcon.src
      },
      {
        key: 'target',
        content: '_blank'
      },
    ]
  }
];

export default STATIC_SOCIAL_LINKS;
