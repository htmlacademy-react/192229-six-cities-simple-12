import { Review } from '../../types/offers-list';
import { ReviewItem } from '../review-item/review-item';

type ReviewListProps = {
    reviews: Review[];
};

export function ReviewsList ({reviews}: ReviewListProps) : JSX.Element {
  return (
    <ul className="reviews__list">
      { reviews.map((review) => <ReviewItem key={review.id} {...review} />)}
    </ul>
  );
}
