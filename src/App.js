import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ImageList from "./image/ImageList";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    images: [],
  };

  onSearchImage = async (search) => {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search,
      },
      headers: {
        Authorization: "Client-ID 9Z28KKomw5Ts6aSHjA2YCKx8WFunL0kl3uOW4zaSzfo",
      },
    });
    this.setState({
      images: result.data.results,
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
