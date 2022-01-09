import Rating from "../../../../../components/shared/Rating"
import { DoctorReview } from "../../../../../logic/models/DoctorReview"


function CommentItem({review} : {review : DoctorReview}) {
    return (
      <div className="comment">
      <img className="avatar avatar-sm rounded-circle" alt="User Image" src="assets/img/patients/patient.jpg" />
      <div className="comment-body">
        <div className="meta-data">
          <span className="comment-author">{review.reviewer.first_name} {review.reviewer.last_name}</span>
          <span className="comment-date">Reviewed {review.createdAt}</span>
          {/* <Rating rating={2} /> */}
        </div>
        {review.is_recommanding && <p className="recommended"><i className="far fa-thumbs-up" /> I recommend the doctor</p>}
        {review.is_recommanding === false &&  <p className="recommended text-danger"><i className="far fa-thumbs-down" /> I do not recommend the doctor</p>}

        <p className="comment-content">
          {review.description}
        </p>
        <div className="comment-reply">
          <a className="comment-btn" href="#">
            <i className="fas fa-reply" /> Reply
          </a>
          <p className="recommend-btn">
            <span>Recommend?</span>
            <a href="#" className="like-btn">
              <i className="far fa-thumbs-up" /> Yes
            </a>
            <a href="#" className="dislike-btn">
              <i className="far fa-thumbs-down" /> No
            </a>
          </p>
        </div>
      </div>
    </div>
    )
  }
  

  export default CommentItem