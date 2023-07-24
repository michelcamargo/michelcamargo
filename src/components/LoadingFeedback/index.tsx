import { CircularProgress, LinearProgress } from "@mui/material";

interface Props {
  minimal?: boolean,
  heading?: string,
  description?: string,
}

const LoadingFeedback = ({ minimal, heading, description }: Props) => {
  if (minimal) {
    return (
      <div>
        <h6>{heading}</h6>
        <span>{description}</span>
        <CircularProgress />
      </div>
    );
  }
  
  return (
    <div>
      <h6>{heading}</h6>
      <span>{description}</span>
      <LinearProgress />
    </div>
  );
};

export default LoadingFeedback;
