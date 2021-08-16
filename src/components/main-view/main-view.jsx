import React from "react";
export class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <div>Inception</div>
        <div>The Shawshank Redemption</div>
        <div>Gladiator</div>
      </div>
    );
  }
}

export default MainView;
// to add something like a button into this you can wrap it all in another <div> or use <React.Fragment> or use the short hand<> </>
