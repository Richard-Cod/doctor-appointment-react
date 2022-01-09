import moment from "moment"
import { useEffect } from "react"
import { OpenHour } from "../../../../logic/models/OpenHour"


const timeIsBetweenOpenOurs = (timeText : string) => {
  const [startDate , closingDate] = getStartEndDateFromText(timeText)
  // const currentDate = buildDateFromText("09:01 AM")
  const currentDate = new Date()
  console.log(startDate)
  console.log(closingDate)
  console.log(currentDate)
  return moment(currentDate).isBetween(startDate, closingDate)
}

const getTodayWeekday = () : string => {
  const a = new Date();
  const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const r = weekdays[a.getDay()];
  return r
}

const isClosed = (day : string , timeText : string) => {
  return !timeText
}

const getTimeFromTimeText = (timeText : string) => {
  timeText = timeText.trim()
  const [hoursPart , timePrecision] = timeText.split(" ")
  return hoursPart.split(":")
}

const buildDateFromText = (str : string) : Date => {
  const dateFromText = getTimeFromTimeText(str)
  const d = new Date()
  d.setHours(Number(dateFromText[0]))
  d.setMinutes(Number(dateFromText[1]))
  return d
}

const getStartEndDateFromText =  (timeText : string) : Array<Date> => {
  const [start , end ] = timeText.split("-")
  const startDate  = buildDateFromText(start)
  const endDate  = buildDateFromText(end)
  return [startDate , endDate]
}

const isOpenedNow = (openHours : OpenHour) => {
  const todayWeekday = getTodayWeekday()
  const todayObject = Object.entries(openHours).find((value) => todayWeekday == value[0])

  if(todayObject){
    console.log(todayObject)
    if(!todayObject[1]) return false

    return timeIsBetweenOpenOurs(todayObject[1])
  }
  return false
}

function BusinessHours({openHours} : {openHours : OpenHour}) {
  useEffect(() => {
    isOpenedNow(openHours)

  }, [])


    return (
        <div role="tabpanel" id="doc_business_hours" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    {/* Business Hours Widget */}
                    <div className="widget business-widget">
                      <div className="widget-content">
                        <div className="listing-hours">
                          <div className="listing-day current">
                            <div className="day">Today <span>{moment(new Date()).format("d MMM y")}  </span></div>
                            <div className="time-items">
                              <span className="open-status">
                                {isOpenedNow(openHours) ? <span className="badge bg-success-light">Open Now</span> : <span className="badge bg-danger-light">Closed</span>  }
                              </span>
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>

                          {Object.entries(openHours).map(item => {
                            const day = item[0]
                            const time = item[1]

                            return  <div className="listing-day">
                                <div className="day">{day}</div>
                                <div className="time-items">
                                  <span className="time">{time} {isClosed(day , time) && <span className="badge bg-danger-light">Closed</span> }  </span>
                                </div>
                            </div>
                          })}
                         
                      
                        </div>
                      </div>
                    </div>
                    {/* /Business Hours Widget */}
                  </div>
                </div>
              </div>
    )
}

export default BusinessHours
