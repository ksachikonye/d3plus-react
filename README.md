# d3plus-react

[![NPM Release](http://img.shields.io/npm/v/d3plus-react.svg?style=flat)](https://www.npmjs.org/package/d3plus-react)
[![Build Status](https://travis-ci.org/d3plus/d3plus-react.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-react)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-react.svg?style=flat)](https://david-dm.org/d3plus/d3plus-react)
[![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/)

React components for d3plus visualizations.

## Installing

Use `npm install d3plus-react -S` to install the package as a dependency.

## Configuration

A valid d3plus `config` _Object_ needs to be provided to the `config` prop of every visualization.

```jsx
import {Treemap} from "d3plus-react";

const methods = {
  groupBy: "id",
  data: [
    {id: "alpha", value: 29},
    {id: "beta",  value: 10}
  ],
  size: d => d.value
};

<Treemap config={methods} />
```

Additionally, a global set of styles can be provided using the "d3plus" React context key. This allows you to set base styles on all of your visualizations in one place, often in an external file. A component's `config` set by props will override global defaults key-by-key using a deep cloning function.
```jsx
import React, {Component} from "react";

export default class MyApp extends Component {

  getChildContext() {

    return {
      d3plus: {
        shapeConfig: {
          fontFamily: "Comic Sans MS"
        }
      }
    };

  }

  render() {

    return (
      <main>
        {/* child components containing visualizations */}
      </main>
    );

  }

}

MyApp.childContextTypes = {
  d3plus: PropTypes.object
};
```

## Update Cycle

In order to detect whether a component _should_ udpate in React, each component does a rudimentary check between the current `config` object and the incoming new `config` object. This is done via a simple equality check on the stringified versions of each object. This can also be overridded using the `forceUpdate` prop:

```js
const shouldUpdate = this.props.forceUpdate ? false : JSON.stringify(oldConfig) === JSON.stringify(newConfig);
```

This works in _most_ cases, but may not update your visualizations if using an accessor function that references an external variable. For example, if your `x` accessor is:

```jsx
const config = {
  ...,
  x: d => d[xVar]
};
```

...and `xVar` changes, the visualization will not update. The quick "hack" for this is add `xVar` to the config object so that it triggers the update via stringify:

```jsx
const config = {
  ...,
  x: d => d[xVar],
  xVar
};
```

## API Reference

##### 
* [AreaPlot](#AreaPlot)
* [BarChart](#BarChart)
* [BoxWhisker](#BoxWhisker)
* [BumpChart](#BumpChart)
* [D3plusContext](#D3plusContext) - A React context instance used to provide global config options via a provider (D3plusContext.Provider).
* [Donut](#Donut)
* [Geomap](#Geomap)
* [LinePlot](#LinePlot)
* [Matrix](#Matrix)
* [Network](#Network)
* [Pack](#Pack)
* [Pie](#Pie)
* [Plot](#Plot)
* [Priestley](#Priestley)
* [Radar](#Radar)
* [RadialMatrix](#RadialMatrix)
* [Rings](#Rings)
* [Sankey](#Sankey)
* [StackedArea](#StackedArea)
* [Tree](#Tree)
* [Treemap](#Treemap)
* [Viz](#Viz) - Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.

---

<a name="AreaPlot"></a>
#### d3plus.**AreaPlot**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/AreaPlot.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BarChart"></a>
#### d3plus.**BarChart**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BarChart.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BoxWhisker"></a>
#### d3plus.**BoxWhisker**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BoxWhisker.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BumpChart"></a>
#### d3plus.**BumpChart**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BumpChart.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="D3plusContext"></a>
#### d3plus.**D3plusContext**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/D3plusContext.js#L3)

A React context instance used to provide global config options via a provider (D3plusContext.Provider).


This is a global function.

---

<a name="Donut"></a>
#### d3plus.**Donut**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Donut.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Geomap"></a>
#### d3plus.**Geomap**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Geomap.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="LinePlot"></a>
#### d3plus.**LinePlot**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/LinePlot.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Matrix"></a>
#### d3plus.**Matrix**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Matrix.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Network"></a>
#### d3plus.**Network**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Network.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Pack"></a>
#### d3plus.**Pack**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Pack.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Pie"></a>
#### d3plus.**Pie**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Pie.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Plot"></a>
#### d3plus.**Plot**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Plot.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Priestley"></a>
#### d3plus.**Priestley**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Priestley.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Radar"></a>
#### d3plus.**Radar**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Radar.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="RadialMatrix"></a>
#### d3plus.**RadialMatrix**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/RadialMatrix.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Rings"></a>
#### d3plus.**Rings**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Rings.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Sankey"></a>
#### d3plus.**Sankey**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Sankey.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="StackedArea"></a>
#### d3plus.**StackedArea**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/StackedArea.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Tree"></a>
#### d3plus.**Tree**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Tree.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Treemap"></a>
#### d3plus.**Treemap**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Treemap.jsx#L5)


This is a global function, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Viz"></a>
#### d3plus.**Viz**() [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.jsx#L5)

Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.


This is a global function.


<a name="Viz.module.exports" href="#Viz.module.exports">#</a> .**module.exports** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.jsx#L75)


This is a static property of [<code>Viz</code>](#Viz).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | An object containing method/value pairs to be passed to the visualization's .config( ) method. |
| [dataFormat] | <code>function</code> | <code>d3plus.dataFold</code> | A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method. |
| [linksFormat] | <code>function</code> | <code>d3plus.links(path, formatter)</code> | A custom formatting function to be used when formatting links from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the links method. |
| [nodesFormat] | <code>function</code> | <code>d3plus.nodes(path, formatter)</code> | A custom formatting function to be used when formatting nodes from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the nodes method. |
| [topojsonFormat] | <code>function</code> | <code>d3plus.topojson(path, formatter)</code> | A custom formatting function to be used when formatting topojson from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the topojson method. |


---

###### <sub>Documentation generated on Tue, 25 Oct 2022 21:19:19 GMT</sub>
