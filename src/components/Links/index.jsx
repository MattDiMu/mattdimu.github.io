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
            <a href={`mailto:${author.email}`}><span className="visuallyhidden">E-Mail</span>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${author.github}`} target="_blank" rel="noopener" ><span className="visuallyhidden">Github</span>
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${author.twitter}`} target="_blank" rel="noopener" ><span className="visuallyhidden">Twitter</span>
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href="https://stackoverflow.com/users/3815374/mattdimu" target="_blank" rel="noopener" ><span className="visuallyhidden">Stackoverflow</span> {/* eslint-disable-line */}
              <i className="icon-stackoverflow" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
