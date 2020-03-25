import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Country from '../Country/Country';
import Panel from '../Panel/Panel';
import Spinner from 'react-bootstrap/Spinner'
import {AppConstant} from '../utils/Constants';

const MainWrapper = styled.div`
    padding:3px;
`
const Main = () => {
    const initialSortState = {
        'country':'asc',
        'province':'asc',
        'confirmed':'asc',
        'deaths':'asc',
        'recovered':'asc'
    }
    const [covidData,setCovidData] = useState(null);
    const [isLoading,setLoading] = useState(false);
    const [sortState,setSortState] = useState(initialSortState);
    const [showCountryData,setShowCountryData] = useState(false);
    const [countryData,setCountryData] = useState(null);

    useEffect(()=>{
        fetchDataByLocation()
    },[])
    const fetchDataByLocation = () => {
        setLoading(true)
        fetch(`${AppConstant.APIURL}/locations`)
        .then(data=>data.json())
        .then(covid=>{
            setCovidData(covid);
            setLoading(false);
        })
    }

    const filterData = (text) => {
        
       const value = text.target.value; 
       if(value === '') {
            fetchDataByLocation()
            return 0;
       }
       const filteredData =  covidData.locations.filter(item=>{
           return item.country.toLowerCase().indexOf(value.toLowerCase()) !== -1?item:null;
       });
       
       setCovidData({
           ...covidData,
           locations:filteredData
       });
    }
    const sortByParam = (param) => {
        const cData = covidData.locations.slice();
        setSortState(prev=>{
            
            return {
                ...sortState,
                [param]: prev[param] === 'asc'?'dsc':'asc'
            }
        })
        if(param === 'country' || param === 'province') {
            
            if(sortState[param] === 'asc') {
                cData.sort((a,b)=>{
                    const x = a[param].toLowerCase();
                    const y = b[param].toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
            }
            if(sortState[param] === 'dsc') {
                cData.sort((a,b)=>{
                    const x = a[param].toLowerCase();
                    const y = b[param].toLowerCase();
                    if (x > y) {return -1;}
                    if (x < y) {return 1;}
                    return 0;
                });
            }
            
        }
        if(param === 'confirmed' || param === 'deaths' || param === 'recovered') {
            if(sortState[param] === 'asc') {
                cData.sort((a,b)=>{

                    const x = a.latest[param];
                    const y = b.latest[param];
                    return x-y;
                });
            }
            if(sortState[param] === 'dsc') {
                cData.sort((a,b)=>{
                    const x = a.latest[param];
                    const y = b.latest[param];
                    return y-x;
                });
            }
        }
        setCovidData({
            ...covidData,
            locations:cData
        });
    }
    const fetchCountryData = (id,country,province)=> {
        
        return fetch(`${AppConstant.APIURL}/locations/${id}`)
        .then(data=>data.json())
        
        
        
    }
    const rowClickHandler = (id,country,province) => {
        window.scrollTo(0,document.body.scrollHeight);
        setShowCountryData(prev=>true)
        fetchCountryData(id,country,province)
        .then(data=>{
            setCountryData({...data}); 
            })
        
    }
    return (
        <>
            {!covidData && (
                <Spinner animation="grow" />
            )}
            {
            covidData && (
            <Grid 
                container
                direction='column'
            >
                <Grid item xs={12} sm>
                    <Header />
                </Grid>
                <Grid item xs={12} sm>
                    {isLoading && (
                        <div style={{position:'fixed',left:'50%',top:'50%'}}>

                            <Spinner animation="grow" />
                        </div>
                    )}
                    {!isLoading && (
                        <MainWrapper>
                            <Banner latest = {covidData.latest}/>
                            <Panel 
                                data={covidData.locations} 
                                search={filterData} 
                                sortByParam={sortByParam}
                                rowClicked = {rowClickHandler}
                            />
                        </MainWrapper>
                    )}
                    
                </Grid>
                {showCountryData && (
                    <Grid item xs={12}>
                        <Country countryData={countryData}/>
                    </Grid>
                )}
            </Grid>)}
        </>
    )
}
export default Main;