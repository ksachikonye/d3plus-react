import React from "react";
import {Radar as type} from "d3plus-plot";
import Viz from "./Viz.jsx";

/**
    @function Radar
    @extends Viz
*/
const Radar = props => <Viz type={type} {...props} />;
export default Radar;
