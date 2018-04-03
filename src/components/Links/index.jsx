import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${author.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${author.github}`} target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${author.twitter}`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;