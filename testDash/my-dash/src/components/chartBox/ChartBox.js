import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import {userRows} from "../../data"; // Import your staff data file

const ChartBox = (props) => {
    const [totalStaff, setTotalStaff] = useState(0);

    useEffect(() => {
        // Update total staff whenever staffData changes
        setTotalStaff(userRows.length);
    }, [userRows]);

    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{totalStaff}</h1>
                <Link to="/users" style={{ color: props.color }}>
                    View all
                </Link>
            </div>
        </div>
    );
};

export default ChartBox;
