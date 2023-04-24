import { MAX_IMAGES_IN_ROOM, MIN_IMAGES_IN_ROOM } from '../../const';
import { RoomGalleryItem } from '../room-gallery-item/room-gallery-item';

type RoomImagesProps = {
    images: string[];
}

export function RoomGallery ({images} : RoomImagesProps) : JSX.Element {

  return (
    <div className="property__gallery">
      {images.slice(MIN_IMAGES_IN_ROOM, MAX_IMAGES_IN_ROOM).map((item) => <RoomGalleryItem key={item} image={item} />)}
    </div>
  );
}
