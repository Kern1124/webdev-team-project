import { BoxProps } from '@chakra-ui/react';
import { useState } from 'react';
import { ReactElement } from 'react';

import { HeaderHideButton } from './HeaderHideButton';
import { ResponsiveFlex } from './ResponsiveFlex';

interface ResponsiveHeaderProps {
  children: ReactElement | ReactElement<BoxProps> | ReactElement<BoxProps>[];
}

export const ResponsiveHeader = ({ children }: ResponsiveHeaderProps) => {
  const [headerIsHidden, setHeaderIsHidden] = useState<boolean>(true);
  return (
    <>
      <HeaderHideButton
        isHidden={headerIsHidden}
        setHidden={setHeaderIsHidden}
      />
      <ResponsiveFlex isHidden={headerIsHidden}>{children}</ResponsiveFlex>
    </>
  );
};
