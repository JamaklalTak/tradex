import moment from 'moment';

import {
    DateConversionType
  } from './constants';

const appUtils = {
convertTimeToString: (timestamp, conversionType = DateConversionType.DATE_AND_YEAR) => {
    const timestampDate = new Date(timestamp);
    const currentDate = new Date();

    // get seconds
    const seconds = Math.abs(currentDate - timestampDate) / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const completeCurrentDate = `${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()}`;
    const completeTimeStampDate = `${timestampDate.getDate()} / ${timestampDate.getMonth() + 1} / ${timestampDate.getFullYear()}`;

    if (conversionType === DateConversionType.DATE_AND_YEAR) {
      if (hours < 24 && (completeCurrentDate === completeTimeStampDate)){
        return `${moment(timestamp).format('h:mm a')}`;
      }
      if(hours > 24 && (completeCurrentDate !== completeTimeStampDate)){
        return `${moment(timestampDate).format('ddd')}, ${moment(timestampDate).format('DD')}/${moment(timestampDate).format('MM')}`;
      }
      return `${moment(timestamp).format('Do MMM')}`;
    }
    if (conversionType === DateConversionType.HOUR_AND_MINUTE) {
        return `${moment(timestamp).format('h:mm a')}`;
    }
    return moment(timestamp).fromNow();
  }
}

export default appUtils;

export const convertTimeToString = (timestamp, conversionType) => {
    return appUtils.convertTimeToString(timestamp, conversionType);
};