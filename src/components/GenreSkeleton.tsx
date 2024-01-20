import { ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton height="32px" />
    </ListItem>
  );
};

export default GenreSkeleton;
