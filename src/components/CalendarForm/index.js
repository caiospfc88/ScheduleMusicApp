import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import PropTypes from 'prop-types';
import {Title, AreaButton} from './styles';

export default function CalendarForm() {
  return (
    <Calendar
    // Initially visible month. Default = Date()
    current={'2019-11-04'}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={'2019-01-01'}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={'2020-12-12'}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={(day) => {console.log('selected day', day)}}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={(day) => {console.log('selected day', day)}}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={'yyyy MM'}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={(month) => {console.log('month changed', month)}}
    // Hide month navigation arrows. Default = false
    hideArrows={false}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    //renderArrow={(direction) => (<Arrow />)}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={false}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => substractMonth()}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => addMonth()}
   />
  );
}
Calendar.propTypes = {
  title: PropTypes.string,
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  heightFlex: PropTypes.number,
};

Calendar.defaultProps = {
  title: 'Titulo do Botão',
  functionOnPress: () => {},
  loading: false,
  heightFlex: 1,
};
