import { Flex } from '@chakra-ui/layout';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { CoverImage } from './CoverImage';
import { FileUpload } from './FileUpload';
import { HeadingSub } from './HeadingSub';
import { ZoomCard } from './ZoomCard';

interface NewspaperCardProps {
  title: string;
  newspaperImg: string;
  publisher: string;
  id: string;
  isEditable?: boolean;
}

export const NewspaperCard = ({
  title,
  publisher,
  id,
  newspaperImg,
  isEditable,
}: NewspaperCardProps) => {
  const navigate = useNavigate();
  const onClickHandle = useCallback(() => {
    navigate(`/newspaper/${id}`);
  }, [id, navigate]);

  return (
    <Flex alignItems="center" h="100%" flexDir="column">
      <ZoomCard onClickHandle={onClickHandle}>
        <CoverImage filename={newspaperImg} />
      </ZoomCard>
      <Flex flexDir="row" gap="1rem">
        {isEditable && <FileUpload id={id} />}
        <HeadingSub
          alignLeft={isEditable == true}
          heading={title}
          subheading={publisher}
        />
      </Flex>
    </Flex>
  );
};
