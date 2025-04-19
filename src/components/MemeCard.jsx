'use client';

import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from '@heroui/react';
import NextImage from 'next/image';

export default function MemeCard({ meme }) {
  return (
    <Card key={meme.id} shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          alt={meme.name}
          isZoomed
          as={NextImage}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={meme.image}
          width={300}
          height={200}
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex w-full justify-between text-small">
          <b>{meme.name}</b>
          <p className="text-default-500 min-w-[55px] self-end">
            Likes {meme.likes}
          </p>
        </div>
        <Divider />
        <Link
          className="text-small self-start"
          isExternal
          showAnchorIcon
          href={meme.image}
        >
          Visit the original meme image.
        </Link>
      </CardFooter>
    </Card>
  );
}
