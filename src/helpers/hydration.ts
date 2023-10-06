import CustomContent from "@/helpers/custom-content";
import { ServerViewProps } from "@/lib/datahooks";

const parseViewProps = (viewProps: ServerViewProps) => {
  const { head, body } = viewProps;
  
  // if (!body || !Array.isArray(body.sessions)) {
  //   return viewProps as unknown as ViewData;
  // }
  
  return {
    viewTitle: head.title,
    viewSubtitle: viewProps.head.description ?? null,
    viewSessions: body.sessions?.map(session => new CustomContent(session)),
  };
};

export default {
  parseViewProps
};
