import React, {Fragment} from 'react';
import dj from './img/dj.jpg';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

function App() {

  return (
    <Fragment>
      <h1>Imagen con lupa</h1>
      <GlassMagnifier
        imageSrc={dj}
        imageAlt="dj"
      />
    </Fragment>
  );
}

export default App;
