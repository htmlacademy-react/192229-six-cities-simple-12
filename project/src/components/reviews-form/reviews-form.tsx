import { ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { resetReviewForm, setRoomReview, validateCommentForm } from '../../store/form-process/form-process';
import { store } from '../../store';
import { addCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getFormValidStatus, getRoomReview } from '../../store/form-process/selector';
import { getSendingFormStatus } from '../../store/data-process/selector';

function ReviewsForm() : JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getRoomReview);
  const isFormValid = useAppSelector(getFormValidStatus);
  const isSending = useAppSelector(getSendingFormStatus);

  const handleFieldChange = (evt : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {

    const {name, value} = evt.target;
    dispatch(setRoomReview({...formData, [name]: value, hotelId: String(id)}));
    dispatch(validateCommentForm(formData));

  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt)=>{
      evt.preventDefault();

      if(isFormValid) {
        ( async ()=> {
          const data = await store.dispatch(addCommentAction(formData));
          if (data.payload) {
            dispatch(resetReviewForm());
            dispatch(validateCommentForm(formData));
          }
        }
        )();
      }
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={handleFieldChange} checked={formData.rating === '5'} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChange} checked={formData.rating === '4'} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChange} checked={formData.rating === '3'} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChange} checked={formData.rating === '2'} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChange} checked={formData.rating === '1'} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={handleFieldChange} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isSending} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
