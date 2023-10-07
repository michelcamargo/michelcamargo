import { ServerViewProps } from "@/lib/datahooks";
import { STATIC_USER_INTERFACE_TERMS, STATIC_PRIVACY_TERMS } from '@/static-data/terms';

export default {
  metadata: {
    path: '/terms',
    title: 'Termos e condições de uso',
    description: 'Políticas de priva e condições de uso da aplicação',
  },
  content: {
    sessions: [
      {
        key: 'user-interface-terms',
        children: STATIC_USER_INTERFACE_TERMS,
      },
      {
        key: 'privacy-terms',
        children: STATIC_PRIVACY_TERMS,
      },
    ]
  },
} as ServerViewProps;
