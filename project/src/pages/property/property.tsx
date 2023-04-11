import ReviewsForm from '../../components/reviews-form/reviews-form';

import { useNavigate, useParams } from 'react-router-dom';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { reviews } from '../../mocks/review';
import { nearPlaces } from '../../mocks/near-places';
import { NearPlacesList } from '../../components/near-places-list/near-places-list';
// import { offer } from '../../mocks/offer';
import { Map } from '../../components/map/map';
import { store } from '../../store';
import { fetchOfferAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';

import { useEffect } from 'react';
// import { offer as ofer } from '../../mocks/offer';


function Property() : JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offer = useAppSelector((state) => state.offer);

  useEffect(() => {
    ( async ()=> {
      const data = await store.dispatch(fetchOfferAction(String(id)));

      if(!data.payload) {
        navigate('/not-found');
      }

    })();


  },[id, navigate]);


  const {isPremium, description, title, host, rating, price, goods, bedrooms, type, maxAdults} = offer;
  const starsStyle = String(Math.floor(rating * 100 / 5));


  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Room"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Room"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Room"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Room"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Room"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Room"/>
            </div>
          </div>
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
          <Map city={nearPlaces[0].city} points={nearPlaces} height={'579px'}/>
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
