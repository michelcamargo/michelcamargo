import { CircularProgress } from "@mui/material";

interface Props {
  minimal?: boolean,
  heading?: string,
  description?: string,
}

const LoadingFeedback = ({ minimal, heading, description }: Props) => {
  
  if (minimal) {
    return (
      <CircularProgress />
    );
  }
  
  return (
    <div>
      <h6>{heading}</h6>
      <span>{description}</span>
      <CircularProgress />
    </div>
    
  );
};

export default LoadingFeedback;
