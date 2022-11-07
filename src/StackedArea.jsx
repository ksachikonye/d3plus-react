import React from "react";
import {StackedArea as type} from "d3plus-plot";
import Viz from "./Viz.jsx";

/**
    @function StackedArea
    @extends Viz
*/
const StackedArea = props => <Viz type={type} {...props} />;
export default StackedArea;
