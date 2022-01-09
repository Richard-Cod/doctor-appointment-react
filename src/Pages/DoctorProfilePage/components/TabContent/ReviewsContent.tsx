import { useEffect, useState } from "react"
import { Doctor } from "../../../../logic/models/Doctor"
import { DoctorReview } from "../../../../logic/models/DoctorReview"
import { User } from "../../../../logic/models/User"
import DoctorProfilePageVM from "../../../../logic/viewModels/DoctorProfilePageVM"
import Comment from "./ReviewsContent/Comment"
import ShowAllCommentsButton from "./ReviewsContent/ShowAllCommentsButton"
import WriteReview from "./ReviewsContent/WriteReview"


const doctorProfilePageVM  =  new DoctorProfilePageVM()


function ReviewsContent({doctorId} : {doctorId : number}) {

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
