import instagramIcon from "@/assets/svg/social/instagram-outlined.svg";
import { CustomContentType } from "@/lib/custom-content";

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
        content: instagramIcon
      },
      {
        key: 'target',
        content: '_blank'
      },
    ]
  }
];

export default STATIC_SOCIAL_LINKS;
