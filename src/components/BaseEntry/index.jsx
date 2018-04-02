import React from 'react';
import moment from 'moment';
import './style.scss';

class BaseEntry extends React.Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    const date = moment(this.props.date);

    return (
      <li className="base-entry">
        <span className="base-entry__title">{title}</span>
        { date.isValid() &&
          <time className="base-entry__time" dateTime={date.format('MMMM D, YYYY')}>
            {date.format('MMMMM D, YYYY')}
          </time>
        }
        <p className="base-entry__description">{description}</p>
      </li>
    );
  }
}

export default BaseEntry;
