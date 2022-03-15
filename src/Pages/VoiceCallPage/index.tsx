import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import MainCallComponent from '../../components/callPages/MainCallComponent'
import { formatFullname } from '../../logic/helper/formatFullname'
import {getCallTimeDifference} from '../../logic/helper/getCallTimeDifference'
import { formatImageFromBackend } from '../../logic/helper/getImageFromBackend'
import { VoiceCallPageVM } from '../../logic/viewModels'
import { setCallingDoctor } from '../../redux/voiceCallPage/voiceCall'
import BaseLayout from '../../templates/layout/BaseLayout'

const voiceCallPageVM = new VoiceCallPageVM()

function VoicecallPage() {
  const user = useAppSelector(s => s.user.value)
  const callingDoctor = useAppSelector(s => s.voiceCall.callingDoctor)

  const [callTimeStart, setcallTimeStart] = useState(new Date())
  const [callTime, setcallTime] = useState(new Date())

  const dispatch = useAppDispatch()

  useEffect(() => {
   const asyncFunc = async () => {
    const doc =  await voiceCallPageVM.getDoctor()
    console.log(doc);
    dispatch(setCallingDoctor(doc))
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

        {callingDoctor && user && <div className="call-content-wrap">
          <div className="voice-call-avatar">
            <img src={callingDoctor.user.profile_pic} alt="User Image" className="call-avatar" />
            <span className="username">{formatFullname(callingDoctor?.user)}</span>
            <span className="call-timing-count">{getCallTimeDifference(callTimeStart)}</span>
          </div>
          <div className="call-users">
            <ul>
              <li>
                <a href="#">
                  <img src={formatImageFromBackend(user.profile_pic)} className="img-fluid" alt="User Image" />
                  <span className="call-mute"><i className="fa fa-microphone-slash" /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>}

    </MainCallComponent>

  )
}

export default VoicecallPage