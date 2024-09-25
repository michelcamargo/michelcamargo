import ResourcesConfig from "@/config/resources.config";
import CustomContent from "@/helpers/content.helper";
import fetcher from "@/helpers/fetcher";
import { LocaleLanguages } from "@/helpers/locale";
import useSWR from "swr";

export default function useDataHooks (language = LocaleLanguages.en.value) {
	const { apiUrl } = ResourcesConfig;
  
	const {
		data: header, error: headerError, isLoading: isHeaderFetching
	} = useSWR(`${apiUrl}/content/template/${'header'}?lang=${language}`, fetcher);
	const {
		data: footer, error: footerError, isLoading: isFooterFetching
	} = useSWR(`${apiUrl}/content/template/${'footer'}?lang=${language}`, fetcher);
  
	return {
		dataHooks: {
			header: header ? new CustomContent(header) : undefined,
			footer: footer ? new CustomContent(footer) : undefined,
		},
		isDataHooksLoading: Boolean(isHeaderFetching || isFooterFetching),
		dataHooksError: Boolean(headerError || footerError)
	};
}
