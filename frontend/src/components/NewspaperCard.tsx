import { Icon } from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { useCallback } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router";

import { CoverImage } from "./CoverImage";
import { CustomButton } from "./CustomButton";
import { HeadingSub } from "./HeadingSub";
import { ZoomCard } from "./ZoomCard";

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
        {isEditable && (
          <CustomButton borderRadius="1.5rem" width="1rem">
            <Icon ringColor="secondaryLight" as={FiEdit2} />
          </CustomButton>
        )}
        <HeadingSub
          alignLeft={isEditable == true}
          heading={title}
          subheading={publisher}
        />
      </Flex>
    </Flex>
  );
};
