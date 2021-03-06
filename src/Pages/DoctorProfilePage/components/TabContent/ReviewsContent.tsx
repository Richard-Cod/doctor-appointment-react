import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../app/hooks"
import { Doctor , User , DoctorReview } from "../../../../logic/models"
import {DoctorProfilePageVM} from "../../../../logic/viewModels"
import { selectDoctorProfilePageVM } from "../../../../redux/viewmodels/viewmodels"
import Comment from "./ReviewsContent/Comment"
import ShowAllCommentsButton from "./ReviewsContent/ShowAllCommentsButton"
import WriteReview from "./ReviewsContent/WriteReview"




function ReviewsContent({doctorId} : {doctorId : number}) {
  const doctorProfilePageVM  = useAppSelector(selectDoctorProfilePageVM)


  const [reviews, setreviews] = useState<DoctorReview[]>()

  useEffect(() => {

    const asyncFunc = async () => {
      const result = await doctorProfilePageVM.getDoctorReviews(5)
      setreviews(result)
    }
    asyncFunc()
  }, [])
 
    return (
        <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
        {/* Review Listing */}
        {reviews && <div className="widget review-listing">
           <ul className="comments-list">
            {reviews.map((review) => <Comment review={review} />)}
          </ul>
          {/* <ShowAllCommentsButton /> */}
        </div>}

        {!reviews && <div>

          <h1 className="text-center">No reviews yet</h1>
          
           </div>}
        {/* <WriteReview doctor={doctor} /> */}
      </div>
    )
}

export default ReviewsContent
