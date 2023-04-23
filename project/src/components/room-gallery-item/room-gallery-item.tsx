type RoomGalleryItemProperty = {
    image: string;
}

export function RoomGalleryItem ({image}: RoomGalleryItemProperty) : JSX.Element {
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Room"/>
    </div>
  );
}
