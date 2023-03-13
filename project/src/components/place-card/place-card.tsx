import { Offer } from '../../types/offers-list';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../const';

type PlaceCardProps = {
  offer: Offer;

}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {offer} = props;
  const {isPremium, previewImage, price, type, title, id} = offer;


  return (
    <article className="cities__card place-card">
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Property, { id : String(id) })}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#todo">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
