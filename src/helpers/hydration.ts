import CustomContent from "@/helpers/custom-content";
import { ServerViewProps } from "@/lib/datahooks";

const parseViewProps = (viewProps: ServerViewProps) => {
  const { metadata, content } = viewProps;
  
  // if (!body || !Array.isArray(body.sessions)) {
  //   return viewProps as unknown as ViewData;
  // }
  
  return {
    viewTitle: metadata.title,
    viewSubtitle: viewProps.metadata.description ?? undefined,
    viewSessions: content.sessions?.map(session => new CustomContent(session)),
  };
};

export default {
  parseViewProps
};
