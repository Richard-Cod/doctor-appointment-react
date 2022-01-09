import { DoctorReview } from "../../../../../logic/models/DoctorReview"
import CommentItem from "./CommentItem"


function CommentReplies({reviews} : {reviews : DoctorReview[]}) {
    return (
      <ul className="comments-reply">
        {reviews.map((review) => <CommentItem review={review} />)}
      </ul>
    )
  }

  export default CommentReplies