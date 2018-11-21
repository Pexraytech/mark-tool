# mark-tool

[![GitHub release][github-image]][github-url]
[![NPM release][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]

A Sketch tool for React based applications, backed-up by [FabricJS](http://fabricjs.com/)

![idea-image] _Please note that this module is still in development! Feel free to send me enhancements and ideas :)_


## Installation

```sh
npm install MarkTool --save
```

or with yarn

```sh
yarn add MarkTool
```

### Source installation

In order to build from source, read the [relevant instructions](http://fabricjs.com/fabric-intro-part-4#node) first. 

Tested with node versions 6,7,8.

## Usage

Import the relevant MarkTool component and use it, you can find more on the examples folder of the project

```javascript
import {MarkTool, Tools} from 'mark-tool';

class MarkToolDemo extends React.Component {
     render() {
        return (
            <MarkTool width='1024px' 
                         height='768px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
        )
     }
}

```
Configuration Options

| Option  	        | Type                  | Default 	    | Description  	                                                    |
|---                |---    	            |---	        |---                                                                |
| tool              | Enumeration (string)  | pencil        | The tool to use, can be select, pencil, circle, rectangle, pan    |
| lineColor         | String                | black         | The color of the line   	                                        |
| lineWidth         | Number                | 1             | The width of the line                                             | 
| fillColor         | String                | transparent   | The fill color (hex format) of the shape when applicable (e.g. circle) |
| backgroundColor   | String                | transparent   | The the background color of the sketch in hex or rgba             |
| undoSteps         | Number                | 15            | number of undo/redo steps to maintain                             |
| imageFormat       | String                | png           | image format when calling toDataURL, can be png or jpeg           | 
| width             | Number                | No Value(null)| Set/control the canvas width, if left empty the sketch will scale to parent element |
| height            | Number                | 512           | Set/control the canvas height, if left empty the sketch will take a reasonable default height |
| value             | JSON                  |               | Property to utilize and handle the sketch data as controlled component |
| defaultValue      | JSON                  |               | Default initial data, to load. If value is set then value will be loaded instead |
| widthCorrection   | Number                | 2             | Specify some width correction which will be applied on resize of canvas, this will help to correct some possible border on the canvas style |
| heightCorrection  | Number                | 0             | Specify some height correction which will be applied on resize of canvas, this will help to correct some possible border on the canvas style | 


Available tools

| Tool              | Description |
|---                |---          |
| Pencil            | Free drawing pencil |
| Line              | Gives you the ability to draw lines |
| Rectangle         | Create rectangles |
| Circle            | Create circles |
| Rectangle         | Create Rectangles |
| Select            | Disables drawing and gives you the ability to modify existing elements in the canvas |
| Pan               | Disables drawing and gives you the ability to move the complete canvas at will, useful to adjust the canvas when zooming in or out (thank you [wmaillard](https://github.com/wmaillard)) |


## Examples

The project includes a webpack server for running the examples, just run:

```sh
git clone https://github.com/Pexraytech/MarkTool.git
yarn install
npm start
```

and navigate to http://localhost:23000

You can as well check the live showcase here: https://github.com/Pexraytech/MarkTool/
                                         
## Issues

See https://github.com/Pexraytech/MarkTool/issues

## Changelog

See https://github.com/Pexraytech/MarkTool/blob/master/CHANGELOG.md

## License

MIT, do remember to add a reference if you find it useful :)