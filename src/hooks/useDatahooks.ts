import useSWR from "swr";
import fetcher from "@/helpers/fetcher";

export default function useDatahooks (key?: string) {
  const fetchUrl = key ? `/api/datahooks/${key}` : '/api/datahooks';
  const { data: dataHooks, error, isLoading } = useSWR(fetchUrl, fetcher);
  
  return {
    dataHooks,
    isDataHooksLoading: isLoading,
    dataHooksError: error
  };
}
