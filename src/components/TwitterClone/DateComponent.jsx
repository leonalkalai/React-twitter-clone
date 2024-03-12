/*
options is an object that defines the formatting options for the toLocaleDateString() method.
  day: '2-digit': specifies that the day should be displayed as a two-digit number
  month: 'long': specifies that the month should be displayed as its full name

 .toLocaleDateString() method is a JavaScript function that is used to convert a Date object to a string 
  representing the date portion of the Date in a locale-specific format.

  'en-US': This specifies the locale or region for which the date formatting should be applied. 
  In this case, it's using the English language and the United States locale.

{ day: '2-digit', month: 'long' }: 
This is an object specifying options for the formatting of the date string. 
It's telling the method to format the day as a two-digit number and the month as its full name.


*/

import PropTypes from 'prop-types';

DateComponent.propTypes = { 
    publishDate:PropTypes.instanceOf(Date)
}

export default function DateComponent(props){
        const options = { day: '2-digit', month: 'long' };
        // Parse the date string to a Date object
        const parsedDate = new Date(props.date);

        const formattedDate = parsedDate.toLocaleDateString('en-US', { day: '2-digit', month: 'long' });

        return (
            <>
            {formattedDate}
            </>
        );
}

