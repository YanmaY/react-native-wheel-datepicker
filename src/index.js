'use strict';

import { Platform } from 'react-native';
import Picker from './picker';
import DatePicker from './date-picker';
import AreaPicker from './area-picker';

let DatePickerComponent = DatePicker;

const registerCustomDatePickerIOS = CustomDatePickerIOS => {
  if (Platform.OS === 'ios') {
    DatePickerComponent = CustomDatePickerIOS;
  }

  return DatePickerComponent;
};

module.exports = {
  Picker,
  AreaPicker,
  DatePicker: DatePickerComponent,
  registerCustomDatePickerIOS
};
