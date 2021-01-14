import './datepicker.scss';
import datepicker from 'js-datepicker';

export const dataPicker = () => {
  const picker = datepicker(deasDeadline,
    {
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-GB');
        deasDeadline.dataset.date = date.toISOString();
        input.value = value;
      },
      position: 'bl',
      startDay: 1, // Calendar week starts on a Monday.
      customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      customMonths: ['Янв', 'Февр', 'Март', 'Арпрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      overlayButton: 'К дате!',
      overlayPlaceholder: 'Enter a 4-digit year',
  
      // Settings
      dateSelected: new Date(),
      minDate: new Date(),
    },
  );
  
  picker.calendarContainer.style.setProperty('width', '100%');
};