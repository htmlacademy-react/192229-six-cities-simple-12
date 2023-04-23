import { RoomGalleryItem } from '../room-gallery-item/room-gallery-item';

type RoomImagesProps = {
    images: string[];
}

export function RoomGallery ({images} : RoomImagesProps) : JSX.Element {

  return (
    <div className="property__gallery">
      {images.slice(0, 6).map((item) => <RoomGalleryItem key={item} image={item} />)}
    </div>
  );
}
