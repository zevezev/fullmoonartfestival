import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "rgba(12, 25, 23, 0.7)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "start",
            margin: "30px",
          }}
        >
          <div
            style={{ textAlign: "center", fontSize: "36px", color: "#E6F288" }}
          >
            Full Moon Art Festival: Flowering Moon
          </div>
          <div className="map-image map-clover" />

          <br />
          <div>May 6, 5pm - Sundown</div>
          <a href="https://goo.gl/maps/mwJgA6HgPR8tcEQX7" target="_blank">
            <div style={{ color: "lightblue" }}>
              Location: Fountain beds near the Vale in Prospect Park, Brooklyn
            </div>
            See screenshots below.
          </a>
          <div>
            This full moon, we will gather at the fountain beds near the Vale in
            Prospect park to spend an afternoon doing art in the woods.
          </div>
          <div>
            We'll progress through the three fountains as the sun goes down,
            each with a different art ritual collaboration.
          </div>
          <div>
            Please bring something to share - an artwork, a story, a sound, a
            sketch, a movement - for use in the second fountain.
          </div>
          <div>
            This is a time to reflect, revel, and meet new friends and
            collaborators!
          </div>
          <div>
            There will be picnic-style snacks. Feel free to bring whatever food
            or materials you'd like to the space.
          </div>
          <div>
            If you want help finding us, a participant will guide folks to the
            fountains from the Grand Army Plaza Gazebo nearest to the library at
            5.
          </div>
          <div>Contact</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            fullmoonartfestival@gmail.com
            <a
              href="https://www.instagram.com/fullmoonartfestival/"
              target="_blank"
            >
              Instagram
            </a>
            410-599-2336
          </div>
          <div className="map-image map-1" />
          <div className="map-image map-2" />
          <div className="map-image map-3" />
          <div className="map-image map-4" />
          <div>
            The Full Moon Art Festival is an ongoing project by&nbsp;
            <a href="https://www.zevizenberg.com/" target="_blank">
              Zev Izenberg
            </a>
            , a painter and collaborative artist based in Brooklyn, and their
            growing community. The Flowering Moon is the 4th Full Moon Art
            Festival out of 12.
          </div>
          <div>Reach them at zevizenberg@gmail.com</div>
        </div>
      </header>
    </div>
  );
}

export default App;
