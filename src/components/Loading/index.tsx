import { ClipLoader } from 'react-spinners';
import { LoadingContainer } from './style';

const Loading = () => {
  return (
    <LoadingContainer>
      <ClipLoader />
    </LoadingContainer>
  );
};

export default Loading;
