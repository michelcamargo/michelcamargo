import CustomContent from "@/helpers/custom-content";
import { ServerViewProps, ViewData } from "@/lib/datahooks";

const getViewData = (serverViewProps: ServerViewProps): ViewData => {
  const { head, body } = serverViewProps;
  
  if (!body || !Array.isArray(body.sessions)) {
    return serverViewProps as ViewData;
  }
  
  return {
    head,
    body: {
      ...body,
      sessions: body.sessions.map(session => new CustomContent(session))
    }
  };
};

export default {
  getViewData,
};
