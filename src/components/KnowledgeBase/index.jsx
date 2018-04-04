import React from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import moment from 'moment';
import './style.scss';
import BaseEntry from '../BaseEntry';
import data from '../../data/knowledge-base';


class KnowledgeBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedDate: 'all',
      availableTags: {},
      selectedTag: '',
      entries: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        entries: data.entries,
        availableTags: data.availableTags
      });
    }, 100);
  }

  handleDateChange(val) {
    this.setState({
      selectedDate: val
    });
  }

  handleTagChange(val) {
    this.setState({
      selectedTag: val
    });
  }

  render() {
    const availableTags = [
      <label key="all">
        <Radio value="" />
        <span className="knowledge-base__circle" />
        <span className="knowledge-base__label">Show all</span>
      </label>
    ];
    Object.keys(this.state.availableTags).forEach((key) => {
      availableTags.push(<label key={key}>
        <Radio value={key} />
        <span className="knowledge-base__circle" />
        <span className="knowledge-base__label">{this.state.availableTags[key]}</span>
      </label>); //eslint-disable-line
    });

    const items = [];
    this.state.entries.forEach((item, index) => {
      // filter by date
      if (this.state.selectedDate !== 'all') {
        if (this.state.selectedDate === 'deprecated') {
          if (moment().subtract(3, 'years').isBefore(moment(item.date))) {
            return;
          }
        } else if (moment().subtract(this.state.selectedDate, 'years').isAfter(moment(item.date))) {
          return;
        }
      }
      // filter by tag
      if (this.state.selectedTag) {
        if (!item.tags || !item.tags.includes(this.state.selectedTag)) {
          return;
        }
      }
      items.push(<BaseEntry key={`${index}_item.title`} item={item} />); // eslint-disable-line
    });
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);

    return (
      <div className="knowledge-base" aria-busy={this.state.isLoading}>
        <form className="knowledge-base__filter">
          <fieldset>
            <legend>Last Update</legend>
            <RadioGroup className="knowledge-base__date" name="selectedDate" selectedValue={this.state.selectedDate} onChange={this.handleDateChange}>
              <label>
                <Radio value="all" />
                <span className="knowledge-base__circle" />
                <span className="knowledge-base__label">Show All</span>
              </label>
              <label>
                <Radio value="1" />
                <span className="knowledge-base__circle" />
                <span className="knowledge-base__label">last year</span>
              </label>
              <label>
                <Radio value="3" />
                <span className="knowledge-base__circle" />
                <span className="knowledge-base__label">last 3 Years</span>
              </label>
              <label>
                <Radio value="deprecated" />
                <span className="knowledge-base__circle" />
                <span className="knowledge-base__label">older than 3 years</span>
              </label>
            </RadioGroup>
          </fieldset>
          <fieldset>
            <legend>Topic</legend>
            <RadioGroup className="knowledge-base__tags" name="selectedTag" selectedValue={this.state.selectedTag} onChange={this.handleTagChange}>
              {availableTags}
            </RadioGroup>
          </fieldset>
        </form>

        { !this.state.isLoading && items.length > 0 && <ul className="knowledge-base__result">{items}</ul> }
      </div>
    );
  }
}

export default KnowledgeBase;
