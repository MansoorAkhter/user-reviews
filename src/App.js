import React from "react";
import "./App.css";
import ResponsiveAppBar from "./home/Navbar";
import bg from "./home/bg.mp4";
// import Review from "./Review";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Review /> */}
      <div className="bgOverlay">
        <h1>HELLO EVERYONE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat fugiat aspernatur rerum amet laudantium magnam consectetur nam ex! Animi inventore quia id odit deserunt libero dolore dolorum repellendus dolores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. At odio rerum, ratione vitae tempora nobis et in, repellendus, suscipit laboriosam iste labore quisquam perferendis odit doloribus? Similique, sint! Assumenda, illo.</p>
        <button className="videoBtn">Pause</button>
      </div>

      <div className="bgContent">
        <video src={bg} autoPlay loop className="bg-video" />
      </div>

      <div className="bgc"></div>
      <div className="bgc1"></div>
    </>
  );
}

export default App;
