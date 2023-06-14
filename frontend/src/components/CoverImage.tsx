import { Image } from "@chakra-ui/image";
import { serverURL } from "../api/requests";

interface CoverImageProps {
  filename: string;
}

export const CoverImage = ({ filename }: CoverImageProps) => {
  return (
    <Image
      src={`${serverURL}/images/${filename}`}
      alt={filename}
      objectFit="cover"
      height="100%"
    />
  );
};
