import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Formatter from '../utils/Formatter';
import Table from 'react-bootstrap/Table';

const TableComponent = ({data,sortByParam,rowClicked}) => {
    const rowClick = (item) => {
        
        rowClicked(item.id,item.country,item.province)
    }
    return(
        <Table bordered>
                <thead>
                    <tr>
                        <th style={{width:'20%'}}><ArrowDropUpIcon onClick={e=>{
                            sortByParam('country')}
                            }/>
                            Country
                        </th>

                        <th style={{width:'20%'}}>
                        <ArrowDropUpIcon onClick={e=>{
                            sortByParam('province')}
                            }/>Province
                        </th>
                        <th style={{width:'20%'}}>
                        <ArrowDropUpIcon onClick={e=>{
                            sortByParam('confirmed')}
                        }/>Cases
                        </th>
                        <th style={{width:'20%'}}>
                        <ArrowDropUpIcon onClick={e=>{
                            sortByParam('deaths')}
                        }/> Death
                        </th>
                        <th style={{width:'20%'}}>
                        <ArrowDropUpIcon onClick={e=>{
                            sortByParam('recovered')}
                        }/>Recovered
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=>{
                           return (<tr key={item.country+item.province} onClick={e=>rowClick(item)}>
                                <td>{item.country}</td>
                                <td>{item.province}</td>
                                <td style={{color:'red'}}>{Formatter.format(item.latest.confirmed)}</td>
                                <td style={{color:'orange'}}>{Formatter.format(item.latest.deaths)}</td>
                                <td style={{color:'green'}}>{Formatter.format(item.latest.recovered)}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
    )
}
export default TableComponent;