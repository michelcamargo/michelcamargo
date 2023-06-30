import { CircularProgress } from "@mui/material";

interface Props {
  minimal?: boolean
}

const LoadingFeedback = ({ minimal }: Props) => {
  
  return (
    <CircularProgress />
  );
};

export default LoadingFeedback;
