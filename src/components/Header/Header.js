import "./Header.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class SearchBar extends Component {
  state = {
    search: "",
  };

  inputChanged = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  searchImage = () => {
    this.props.onSearchImage(this.state.search);
  };

  render() {
    return (
      <>
        <Navbar className="header-custom">
          <Container fluid>
            <Navbar.Brand href="#">
              <div id="logo-pro" className="logo-pro" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Form.Control
                type="search"
                placeholder="Resim Ara..."
                className="me-2"
                aria-label="Resim Ara.."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    this.searchImage();
                  }
                }}
                onChange={this.inputChanged}
              />
              <Button variant="success" onClick={this.searchImage}>
                Ara
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default SearchBar;
