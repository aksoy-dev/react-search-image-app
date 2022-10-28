import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spanCount: 0,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    //https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component
    this.myRef.current.addEventListener("load", () => {
      const mySpan = Math.round(this.myRef.current.clientHeight / 5) + 1;
      const heightd = Math.round(this.myRef.current.clientHeight) - 30;
      const widthd = Math.round(this.myRef.current.clientWidth) - 40;
      this.setState({
        spanCount: mySpan,
        heightdCount: heightd,
        widthdCount: widthd,
      });
    });
  }
  render() {
    const { image } = this.props;

    return (
      <>
        <div style={{ gridRowEnd: `span ${this.state.spanCount}` }}>
          <div
            className="inclusive-l"
            style={{
              marginTop: `${this.state.heightdCount}px`,
              marginLeft: "240px",
            }}
          >
            <div className="like">{image.likes}</div>
          </div>
          <a href={image.urls.full} rel="noreferrer" target="_blank" download>
            <div
              className="inclusive-d"
              style={{
                marginTop: `${this.state.heightdCount}px`,
                marginLeft: `${this.state.widthdCount}px`,
              }}
            >
              <div className="btn-download"></div>
            </div>
          </a>

          <img ref={this.myRef} key={image.id} src={image.urls.small} alt="" />
        </div>
      </>
    );
  }
}

export default Image;
