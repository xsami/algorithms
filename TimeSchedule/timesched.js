/**
 * write the algorithm to calculate the
 * availability for the desired meeting
 * between n number of calendars.
 */
const cal1 = {
    meetings: [
      ['9:00', '10:30'],
      ['12:00', '13:30'],
      ['16:00', '18:30'],
    ],
    daybounds: ['9:00', '20:00'],
  };
  
  const cal2 = {
    meetings: [
      ['10:00', '11:30'],
      ['12:30', '14:30'],
      ['14:30', '15:00'],
      ['16:00', '17:00'],
    ],
    daybounds: ['10:00', '18:30'],
  };
  
  const meetingDuration = 30;

  const TIME_SEPARATOR = ':';


  function asTime(number) {
      const toString = number + '';
      const digits = 4;
      const missings = digits - toString.length;
      const filler = "0".repeat(missings);
      const stringFilled = missings === 0 ? toString : filler + toString;
      return `${stringFilled.substr(0, 2)}${TIME_SEPARATOR}${stringFilled.substr(2)}`;
  }

  function timeAddition(time, mins) {
      const ts = time + mins;
      let mm = ts % 100;
      let hh = Math.floor(ts / 100);
      if (mm >= 60) {
        hh++;
        mm = 60 - mm;
      }
      if (hh > 23) {
          hh = 0;
      }
      return hh * 100 + mm;
  }

  function timeToInt(time) {
    return +(time.split(TIME_SEPARATOR).join(''))
  }

  function canScheduleTime(now, duration, meetings) {
    const from = now;
    const to = timeAddition(now, duration)

    for (let i = 0; i < meetings.length; i++) {
        const meeting = meetings[i];
        const mfrom =  timeToInt(meeting[0]);
        const mto = timeToInt(meeting[1]);

        if (from >= mfrom && to <= mto) {
            return false;
        }
    }

    return true;
   }

 function findAvailability(meetingDurations, ...cals) {

    const result = [];
    const allMeetings = [...cals].reduce((prev, act) => 
        [...act.meetings, ...prev], []);
    
    const allDayBounds = [...cals].reduce((prev, act) => 
        [...act.daybounds, ...prev], []).map(timeToInt);

    let dayStartTime = Math.min(...allDayBounds);
    const dayEndTime = Math.max(...allDayBounds);

    for (let currentTime = dayStartTime; timeAddition(currentTime, meetingDuration) <= dayEndTime;
        currentTime = timeAddition(currentTime, meetingDuration)) {

        if (canScheduleTime(currentTime, meetingDuration, allMeetings)) {
            const from = asTime(currentTime);
            const to = asTime(timeAddition(currentTime, meetingDuration));
            result.push([from, to]);
        }

    }

    return result;
  }
  
 console.log( 
     findAvailability(meetingDuration, cal1, cal2)
 );
  /**
   * Expected outcome
   * [
   *  ['11:30', '12:00'],
   *  ['15:00', '16:00'],
   *  ['18:00', '18:30'],
   * ]
   */
  