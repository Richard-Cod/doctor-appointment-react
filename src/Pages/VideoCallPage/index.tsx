import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import MainCallComponent from '../../components/callPages/MainCallComponent'
import { formatImageFromBackend } from '../../logic/helper/getImageFromBackend'
import { VoiceCallPageVM } from '../../logic/viewModels'
import { setCallingVideoDoctor } from '../../redux/videoCallPage/videoCall'

const videoCallPageVM = new VoiceCallPageVM()

function VoicecallPage() {
  const user = useAppSelector(s => s.user.value)
  const callingDoctor = useAppSelector(s => s.videoCall.callingDoctor)

  const [callTimeStart, setcallTimeStart] = useState(new Date())
  const [callTime, setcallTime] = useState(new Date())

  const dispatch = useAppDispatch()

  useEffect(() => {
   const asyncFunc = async () => {
    const doc =  await videoCallPageVM.getDoctor()
    dispatch(setCallingVideoDoctor(doc))
   }
   asyncFunc()
  }, [])
  

  useEffect(() => {
    setcallTime(new Date())
    const interval = setInterval(() => {
      setcallTime(new Date())
    },1000)

    return () => {
      clearInterval(interval)
    }
    
  }, [])

  return (
        <MainCallComponent callingDoctor={callingDoctor} user={user}> 

          {callingDoctor && user && <div className="call-contents">
                  <div className="call-content-wrap">
                    <div className="user-video">
              <img src={formatImageFromBackend(callingDoctor.user.profile_pic)} alt="User Image" />
            </div>
            <div className="my-video">
              <ul>
                <li>
                  <img src={formatImageFromBackend(user.profile_pic)} className="img-fluid" alt="User Image" />
                </li>
              </ul>
            </div>
          </div>
        </div>}

    </MainCallComponent>

  )
}

export default VoicecallPage


