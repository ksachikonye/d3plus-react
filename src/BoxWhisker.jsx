import React from "react";
import {BoxWhisker as type} from "d3plus-plot";
import Viz from "./Viz.jsx";

/**
    @function BoxWhisker
    @extends Viz
*/
const BoxWhisker = props => <Viz type={type} {...props} />;
export default BoxWhisker;
