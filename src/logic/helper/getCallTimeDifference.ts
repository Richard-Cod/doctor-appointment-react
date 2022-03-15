const formatPartOfTime = (value : string,isSeconds = false) => {
  const text = value == "0" ? "" : `${value.length == 1 ? `0${value}` : value}`

  return value != "0" && !isSeconds ? `${text}:` : text
}

const getCallTimeDifference = (callTimeStart : Date) : string => {
    const date2 = new Date();

    // To calculate the time difference of two dates
    var difftime = date2.getTime() - callTimeStart.getTime();
      
    // To calculate the no. of days between two dates
    const seconds = ((difftime / 1000) % 60).toFixed(0) ;
    const minutes = ((difftime / (1000*60)) % 60).toFixed(0);
    const hours   = ((difftime / (1000*60*60)) % 24).toFixed(0);
    
    const result = `${formatPartOfTime(hours)}${formatPartOfTime(minutes)}${formatPartOfTime(seconds,true)}`
    return result.length == 2 ? `00:${result}` : result
  }

export {getCallTimeDifference}