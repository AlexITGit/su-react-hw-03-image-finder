import "./App.css";
import React, { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { getImages } from "./http/getImages";
import { Spinner } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";

class App extends Component {
  state = {
    imgArr: [],
    query: "",
    page: 1,
    perPage: 12,
    totalHits: 0,
    loading: false,
    disabled: false,
    modalUrl: null,
    active: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(
      { imgArr: [], query: "", page: 1, loading: false, disabled: false },
      () => {
        if (e.target.children[1].value) {
          this.setState({ loading: true }, () => {
            getImages(
              e.target.children[1].value,
              this.state.page,
              this.state.perPage
            )
              .then((data) => {
                this.setState({
                  imgArr: data.hits,
                  query: e.target.children[1].value,
                  totalHits: data.totalHits,
                });
              })
              .catch((e) => {
                console.log(e);
              })
              .finally(() => {
                this.setState({ loading: false });
              });
          });
        } else {
          return;
        }
      }
    );
  };

  loadMoreClickHandler = () => {
    this.setState(
      (prevState) => ({
        ...prevState,
        page: prevState.page + 1,
        loading: true,
      }),
      () => {
        const { page, perPage, totalHits } = this.state;
        if (page * perPage > totalHits) {
          this.setState({ disabled: true }, () => {
            alert("Thats all images");
          });
        } else {
          getImages(this.state.query, this.state.page, this.state.perPage)
            .then((data) => {
              this.setState(
                (prevState) => ({
                  imgArr: [...prevState.imgArr, ...data.hits],
                }),
                () => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }
              );
            })
            .catch((e) => {
              console.log(e);
            })
            .finally(() => {
              this.setState({ loading: false });
            });
        }
      }
    );
  };

  keyDownHandler = (e) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  };

  imgClickHandler = (modalUrl) => {
    this.setState({ modalUrl, active: true }, () => {
      window.addEventListener("keydown", this.keyDownHandler);
    });
  };

  closeModal = () => {
    this.setState({ active: false }, () => {
      window.removeEventListener("keydown", this.keyDownHandler);
    });
  };

  render() {
    const { imgArr, loading, disabled, modalUrl, active } = this.state;
    return (
      <div className="App">
        {loading && <Spinner />}
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImageGallery
          imgArr={imgArr}
          onImgClick={this.imgClickHandler}
        ></ImageGallery>
        {imgArr.length > 0 && (
          <Button
            title={"Load more"}
            clickHandler={this.loadMoreClickHandler}
            disabled={disabled}
          ></Button>
        )}
        {active && (
          <Modal
            active={active}
            closeModal={this.closeModal}
            modalUrl={modalUrl}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
