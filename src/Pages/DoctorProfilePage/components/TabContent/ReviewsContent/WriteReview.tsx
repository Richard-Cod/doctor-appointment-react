import { Doctor , DoctorReview } from "../../../../../logic/models"

 function WriteReview({doctor} : {doctor : Doctor}) {
    return (
      <div className="write-review">
            <h4>Write a review for <strong>Dr. {doctor.user.first_name} {doctor.user.last_name}</strong></h4>
            {/* Write Review Form */}
            <form>
              <div className="form-group">
                <label>Review</label>
                <div className="star-rating">
                  <input id="star-5" type="radio" name="rating" defaultValue="star-5" />
                  <label htmlFor="star-5" title="5 stars">
                    <i className="active fa fa-star" />
                  </label>
                  <input id="star-4" type="radio" name="rating" defaultValue="star-4" />
                  <label htmlFor="star-4" title="4 stars">
                    <i className="active fa fa-star" />
                  </label>
                  <input id="star-3" type="radio" name="rating" defaultValue="star-3" />
                  <label htmlFor="star-3" title="3 stars">
                    <i className="active fa fa-star" />
                  </label>
                  <input id="star-2" type="radio" name="rating" defaultValue="star-2" />
                  <label htmlFor="star-2" title="2 stars">
                    <i className="active fa fa-star" />
                  </label>
                  <input id="star-1" type="radio" name="rating" defaultValue="star-1" />
                  <label htmlFor="star-1" title="1 star">
                    <i className="active fa fa-star" />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Title of your review</label>
                <input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
              </div>
              <div className="form-group">
                <label>Your review</label>
                <textarea id="review_desc" maxLength={100} className="form-control" defaultValue={""} />
                <div className="d-flex justify-content-between mt-3"><small className="text-muted"><span id="chars">100</span> characters remaining</small></div>
              </div>
              <hr />
              <div className="form-group">
                <div className="terms-accept">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="terms_accept" />
                    <label htmlFor="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button type="submit" className="btn btn-primary submit-btn">Add Review</button>
              </div>
            </form>
            {/* /Write Review Form */}
          </div>
    )
  }

export default WriteReview