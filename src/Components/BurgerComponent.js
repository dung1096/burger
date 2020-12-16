import React, { Component } from "react";
import { connect } from "react-redux";

class BurgerComponent extends Component {
  renderBurger() {
    let { burger } = this.props;
    let content = [];
    for (let index in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[index]; i++) {
        breadMid.push(<div key={i} className={index}></div>);
      }
      content.push(breadMid);
    }
    return content;
  }
  render() {
    return (
      <div>
        <h3 className="text-center">Cửa hàng burger</h3>
        <div className="breadTop"></div>
        {this.renderBurger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.BurgerReducer.burger,
});

export default connect(mapStateToProps)(BurgerComponent);
