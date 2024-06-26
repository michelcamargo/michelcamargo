import { SessionArticle } from "@/lib/content";
import { ServerViewProps } from "@/lib/datahooks";
// import { STATIC_PRIVACY_TERMS } from '@/static/legal/terms';

export default {
  metadata: {
    path: '/terms',
    title: 'Termos e condições de uso',
    description: 'Políticas de privacidade e condições de uso da aplicação',
  },
  content: {
    // sessions: STATIC_PRIVACY_TERMS
  },
} as ServerViewProps<SessionArticle>;
