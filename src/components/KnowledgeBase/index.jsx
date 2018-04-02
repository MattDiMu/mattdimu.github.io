import React from 'react';
import './style.scss';
import BaseEntry from '../BaseEntry';
import data from '../../data/knowledge-base';

class KnowledgeBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      entries: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        entries: data.entries
      });
    }, 100);
  }

  render() {
    const items = [];
    this.state.entries.forEach((item, index) => {
      items.push(<BaseEntry key={`${index}_item.title`} title={item.title} />); // eslint-disable-line
    });

    return (
      <div className="knowledge-base" aria-busy={this.state.isLoading}>
        <form className="knowledge-base__filter">
          <fieldset>
            <legend>Last Update</legend>
            <label htmlFor="last_update_99">
              <input type="radio" name="last_update" id="last_update_99" value="99" />
              <span>all</span>
            </label>
            <label htmlFor="last_update_1">
              <input type="radio" name="last_update" id="last_update_1" value="1" />
              <span>within last year</span>
            </label>
            <label htmlFor="last_update_3">
              <input type="radio" name="last_update" id="last_update_3" value="3" />
              <span>within last 3 years</span>
            </label>
            <label htmlFor="last_update_deprecated">
              <input type="radio" name="last_update" id="last_update_deprecated" value="deprecated" />
              <span>Older than 3 years</span>
            </label>
          </fieldset>
        </form>
        { !this.state.isLoading && items }
      </div>
    );
  }
}

export default KnowledgeBase;
