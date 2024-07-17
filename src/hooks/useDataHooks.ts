import ContentService from "@/services/content.service";
import CustomContent from "@/helpers/content.helper";

export default function useDataHooks (keys: string[] = ['header','footer']) {
  const { data: header, error: errorHeader, isLoading: isFetchingHeader } = ContentService.fetchSWRTemplate(keys[0]);
  const { data: footer, error: errorFooter, isLoading: isFetchingFooter } = ContentService.fetchSWRTemplate(keys[1]);
  
  return {
    dataHooks: {
      header: header ? new CustomContent(header) : undefined,
      footer: footer ? new CustomContent(footer) : undefined,
    },
    isDataHooksLoading: Boolean(isFetchingHeader || isFetchingFooter),
    dataHooksError: Boolean(errorHeader || errorFooter)
  };
}
