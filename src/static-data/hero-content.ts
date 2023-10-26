import { CustomContentType } from "@/lib/content";

const STATIC_HERO_CONTENT: Array<CustomContentType> = [
  {
    key: 'heading',
    children: [
      {
        key: 'firstname',
        content: 'Michel'
      },
      {
        key: 'middlename',
        content: 'de Souza'
      },
      {
        key: 'lastname',
        content: 'Camargo'
      }
    ]
  },
  {
    key: 'subHeading',
    content: 'Developer & UIUX Designer'
  },
  {
    key: 'description',
    content: 'Pleasure to ensure great experiences solving modern people problems.'
  }
];

export default STATIC_HERO_CONTENT;
