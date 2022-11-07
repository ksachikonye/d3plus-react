import React from "react";
import {Pack as type} from "d3plus-hierarchy";
import Viz from "./Viz.jsx";

/**
    @function Pack
    @extends Viz
*/
const Pack = props => <Viz type={type} {...props} />;
export default Pack;
