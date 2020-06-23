import React, { Component } from "react";
import NavBar from "../LandingPage/NavBar";
import "./Review.css";

class Review extends Component {
  state = {};
  render() {
    return (
      <section>
        <NavBar />
        <div className="reviews">
          <form>
            <h1>House Name</h1>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Add Headline</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">Select Rating:</label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Add Review</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group" id="btn">
              <button type="button" class="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Review;
