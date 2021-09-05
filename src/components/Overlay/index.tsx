import { ReactNode } from 'react';
import { OverlayContainer, OverlayContent } from './style';

interface OverlayProps {
  children?: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return (
    <OverlayContainer>
      <OverlayContent>{children}</OverlayContent>
    </OverlayContainer>
  );
};

export default Overlay;
