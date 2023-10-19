import { ServerViewProps } from "@/lib/datahooks";
import STATIC_LINK_TREE from '@/static-data/link-tree';

export default {
  metadata: {
    path: '/links',
    title: 'Links - Michel Camargo',
    description: 'Links - Michel Camargo',
  },
  content: {
    sessions: [
      {
        key: 'link-tree',
        children: STATIC_LINK_TREE,
      },
    ]
  },
} as ServerViewProps;
