import { memo } from "react";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Game } from "../interfaces/Game";

interface Props {
  game: Game;
}

const GameCard = memo(({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        loading="lazy"
        alt={game.name}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
});

GameCard.displayName = "GameCard";

export default GameCard;
