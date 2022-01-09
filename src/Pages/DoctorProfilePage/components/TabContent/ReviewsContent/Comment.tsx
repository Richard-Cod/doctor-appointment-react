import { DoctorReview } from "../../../../../logic/models/DoctorReview"
import CommentItem from "./CommentItem"
import CommentReplies from "./CommentReplies"


function Comment({review} : {review : DoctorReview}) {
    return (
      <li>
        <CommentItem review={review}  />
        {/* <CommentReplies review_subreviews={review}  /> */}
    </li>
    )
}

export default Comment