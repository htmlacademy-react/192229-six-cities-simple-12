import ReviewsForm from '../../components/reviews-form/reviews-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { NearPlacesList } from '../../components/near-places-list/near-places-list';
import { Map } from '../../components/map/map';
import { store } from '../../store';
import { fetchCommentsAction, fetchNearOffersAction, fetchOfferAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import { getComments, getNearPlaces, getOffer } from '../../store/data-process/selector';
import { getRating } from '../../utils';
import { RoomGallery } from '../../components/room-gallery/room-gallery';
import { AppRoute } from '../../components/const';

function Property() : JSX.Element {

  const {id} = useParams();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getOffer);
  const reviews = useAppSelector(getComments);
  const nearPlaces = useAppSelector(getNearPlaces);

  useEffect(() => {
    ( async ()=> {
      const [data] = await Promise.all([store.dispatch(fetchOfferAction(String(id))), store.dispatch(fetchCommentsAction(String(id))), store.dispatch(fetchNearOffersAction(String(id)))]);

      if(!data.payload) {
        navigate(AppRoute.NotFound);
      }

    }
    )();

  },[id, navigate]);

  const {isPremium, description, title, host, rating, price, goods, bedrooms, type, maxAdults, images} = offer;


  const starsStyle = getRating(rating);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <RoomGallery images={images}/>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <div className="property__mark"><span>Premium</span></div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${starsStyle}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item): JSX.Element =><li key={item} className="property__inside-item">{item}</li>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro && <span className="property__user-status">Pro</span>}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews}/>
              {authorizationStatus === 'AUTH' && <ReviewsForm /> }
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={offer.city} points={[ ...nearPlaces, offer ]} activeCard={Number(id)} height={'579px'}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearPlacesList places={nearPlaces} />
        </section>
      </div>
    </main>
  );
}

export default Property;
