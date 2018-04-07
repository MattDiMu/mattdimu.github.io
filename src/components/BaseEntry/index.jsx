import React from 'react';
import moment from 'moment';
import './style.scss';


function beautifyUrl(str) {
  return str.replace(/https?:\/\//gi, '').replace(/\/$/, '');
}

class BaseEntry extends React.Component {
  render() {
    const title = this.props.item.title;
    const description = this.props.item.description;
    const linkArr = this.props.item.links || [];
    const Links = [];

    linkArr.forEach((link) => {
      Links.push(<a className="base-entry__link" href={link} key={link} rel="noopener" target="_blank">{beautifyUrl(link)}</a>);
    });

    const date = moment(this.props.item.date);

    return (
      <li className="base-entry">
        <div>
          <h3 className="base-entry__title">{title}</h3>
          { date.isValid() &&
            <time className="base-entry__time" dateTime={date.format('MMMM D, YYYY')}>
              {date.format('MMMM D, YYYY')}
            </time>
            }
        </div>
        <p className="base-entry__description">{description}</p>
        {Links}
      </li>
    );
  }
}

export default BaseEntry;
