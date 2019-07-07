import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';

export default class RecipeSearch extends Component {
  render() {
    const {value, handleChange, handleSubmit} = this.props

    console.log('search',this.props);
    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 text-center mt-5">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-danger">food2fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onions,carrots"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      {/* <FontAwesome
                        name="search-plus"
                      /> */}
                      search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
