import React from 'react'
import CanvasJSReact from '../lib/canvasjs.react';
import Banner from '../Banner/Banner';
import styled from 'styled-components';
//var CanvasJSReact = require('./canvasjs.react');

const LineContainer = styled.div`
    padding:20px;
`
const LineChart = ({data}) => {
    // let CanvasJS = CanvasJSReact.CanvasJS;
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    
    const getData = (status) => {
        
        const timelineConfirmed = status.timeline;
        let dataPoints = [];
        for(let item of Object.keys(timelineConfirmed)) {
            dataPoints.push({
                y:timelineConfirmed[item],
                x:new Date(item)

            });
        }
        
        return dataPoints;
    }
    const options = {
        theme: "light2",
        title: {
            text: ''
        },
        axisY: {
            title: "Number of person",
            includeZero: true,
            
            
        },
        data: [{
            type: "spline",
            // xValueFormatString: "DD MMM YYYY",
            // yValueFormatString: "#",
            name: "Confirmed",
			showInLegend: true,
            dataPoints: getData(data.location.timelines.confirmed)
        },{
            type: "spline",
            // xValueFormatString: "DD MMM YYYY",
            // yValueFormatString: "#",
            name: "Deaths",
			showInLegend: true,
            dataPoints: getData(data.location.timelines.deaths)
        },{
            type: "spline",
            xValueFormatString: "DD MMM YYYY",
            // yValueFormatString: "#",
            name: "Recovered",
			showInLegend: true,
            dataPoints: getData(data.location.timelines.recovered)
        }]
    }
    const getLatestdata = () => {
        return {
            'confirmed':data.location.timelines.confirmed.latest,
            'deaths':data.location.timelines.deaths.latest,
            'recovered':data.location.timelines.recovered.latest
        }
        
    }
    return(
        <LineContainer>
            <h3>{data.location.country}</h3>
            <Banner latest = {getLatestdata()}/>
            <hr/>
            <CanvasJSChart options = {options} />
        </LineContainer>
    )
}
export default LineChart;