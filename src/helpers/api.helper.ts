import { ApiException } from "@/lib/error";
import axios, { AxiosError, AxiosResponse } from 'axios';

class ApiHelper {
	
  public static handleException<T>(e: unknown): ApiException<T> {
    const DEFAULT_CODE = 500;
		
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<T>;
			
      const parsedResponse = error.response ? ApiHelper.handleAxiosResponseInfo<T>(error.response) : null;
			
      return {
        code: parsedResponse?.code ?? Number(error?.code) ?? DEFAULT_CODE,
        apiCode: parsedResponse?.apiCode,
        message: parsedResponse?.message ?? error.message,
        response: error.response,
        request: error.request,
      };
    }
		
    return {
      code: DEFAULT_CODE,
    };
  }
	
  public static handleAxiosResponseInfo<T>(response: AxiosResponse<T>) {
    const { data, status, statusText } = response;
		
    const resDataInfo = ApiHelper.handleExceptionResponseData<T>(data);
		
    return {
      code: status,
      apiCode: resDataInfo.apiCode,
      message: (resDataInfo && resDataInfo?.message) ? resDataInfo.message : statusText,
    };
  }
	
  public static handleExceptionResponseData<T>(data: T): Partial<ApiException<T>> {
		 return {
			 apiCode: (data && data?.statusCode) ? Number(data.statusCode) : undefined,
			 message: (data && data?.message) ? data.message.toString() : undefined,
		 };
  }

}

export default ApiHelper;
