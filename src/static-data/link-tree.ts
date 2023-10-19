import { CustomContentType } from "@/lib/custom-content";

const STATIC_LINK_TREE: Array<CustomContentType> = [
  {
    key: 'porfolio',
    children: [
      {
        key: 'label',
        content: 'Portfolio'
      },
      {
        key: 'link',
        content: '/'
      },
      {
        key: 'icon',
        content: '',
      },
    ]
  },
  {
    key: 'instagram',
    children: [
      {
        key: 'label',
        content: 'Instagram'
      },
      {
        key: 'link',
        content: ''
      },
      {
        key: 'icon',
        content: ''
      },
    ]
  },
  {
    key: 'whatsapp',
    children: [
      {
        key: 'label',
        content: 'WhatsApp'
      },
      {
        key: 'link',
        content: ''
      },
      {
        key: 'icon',
        content: ''
      },
    ]
  }
];

export default STATIC_LINK_TREE;
