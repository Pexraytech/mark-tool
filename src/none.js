/* eslint-disable */
'use strict';

import FabricCanvasTool from './fabrictool'

class None extends FabricCanvasTool {
  configureCanvas() {
    this._canvas.isDrawingMode = false
  }
}

export default None;
