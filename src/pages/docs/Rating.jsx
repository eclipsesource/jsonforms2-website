import React from 'react';

export class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: props.value + 1,
      hoverAt: null
    };
  }

  handleMouseOver(idx) {
    this.setState({
      hoverAt: idx + 1
    });
  }

  handleMouseOut() {
    this.setState({
      hoverAt: null
    });
  }

  handleClick(idx) {
    this.setState({
      rating: idx + 1
    });
  }

  render() {
    const { onClick } = this.props;

    return (<div>
        {
          [1, 2, 3, 4, 5].map(i => {
            const rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;

            return <span onMouseOver={() => this.handleMouseOver(i)}
                         onMouseOut={() => this.handleMouseOut()}
                         onClick={() => {
                           this.handleClick(i);
                           onClick({ value: i});
                         }}
                         key={i}
            >
              {i < rating ? '\u2605' : '\u2606'}
            </span>;
          })
        }
      </div>
    );
  }
}
