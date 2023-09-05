import React, {Component, Fragment, useState} from 'react';
import {
    Row, Col,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    Nav,
    NavItem,
    NavLink,
    Progress
} from 'reactstrap';

import {
    AreaChart, Area, LineChart, Line,
    ResponsiveContainer,
    BarChart, Bar,
    ComposedChart,
    CartesianGrid
} from 'recharts';
import {
    faAngleUp,
    faAngleDown,
    faArrowLeft,
    faArrowRight,
    faEllipsisH,

} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import avatar1 from '../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../assets/utils/images/avatars/4.jpg';

function Dashboard() {
    const [data,steData] = useState([
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
        {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
        {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
        {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]);
    
    const [data2,steData2] = useState([
        {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
        {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
        {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
        {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
        {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
        {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
        {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
        {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
        {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
    ]);

  return (
    <>
    <Row>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-primary"/>
                                                <i className="lnr-cog text-primary"/>
                                            </div>
                                            <div className="widget-numbers">
                                                45.8k
                                            </div>
                                            <div className="widget-subheading">
                                                Total Tasks
                                            </div>
                                            <div className="widget-description text-success">
                                                <FontAwesomeIcon icon={faAngleUp}/>
                                                <span className="ps-1">175.5%</span>
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <LineChart data={data}
                                                        margin={{top: 0, right: 5, left: 5, bottom: 0}}>
                                                    <Line type='monotone' dataKey='pv' stroke='#3ac47d' strokeWidth={3}/>
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-success"/>
                                                <i className="lnr-screen text-success"/>
                                            </div>
                                            <div className="widget-numbers">
                                                17.2k
                                            </div>
                                            <div className="widget-subheading">
                                                Active Tasks
                                            </div>
                                            <div className="widget-description text-warning">
                                                <span className="pe-1">175.5%</span>
                                                <FontAwesomeIcon icon={faArrowLeft}/>
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <AreaChart data={data}
                                                        margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                                    <Area type='monotoneX' dataKey='uv' stroke='#fd7e14' fill='#ffb87d'/>
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-danger"/>
                                                <i className="lnr-laptop-phone text-danger"/>
                                            </div>
                                            <div className="widget-numbers">
                                                5.82k
                                            </div>
                                            <div className="widget-subheading">
                                                Late Tasks
                                            </div>
                                            <div className="widget-description text-danger">
                                                <FontAwesomeIcon icon={faAngleDown}/>
                                                <span className="ps-1">54.1%</span>
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <BarChart data={data}>
                                                    <Bar dataKey='uv' fill='#81a4ff' stroke='#3f6ad8' strokeWidth={2}/>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-info"/>
                                                <i className="lnr-graduation-hat text-info"/>
                                            </div>
                                            <div className="widget-numbers">
                                                63.2k
                                            </div>
                                            <div className="widget-subheading">
                                                Completed Tasks
                                            </div>
                                            <div className="widget-description text-info">
                                                <FontAwesomeIcon icon={faArrowRight}/>
                                                <span className="ps-1">175.5%</span>
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <AreaChart data={data}
                                                        margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                                    <Area type='stepAfter' dataKey='uv' stroke='#3aabff' fill='#78C3FB'/>
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-warning"/>
                                                <i className="lnr-heart icon-gradient bg-premium-dark"> </i>
                                            </div>
                                            <div className="widget-numbers">
                                                5.82k
                                            </div>
                                            <div className="widget-subheading">
                                                Cancelled Tasks
                                            </div>
                                            <div className="widget-description">
                                                Down by
                                                <span className="text-danger ps-1 pe-1">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                    <span className="ps-1">54.1%</span>
                                                </span>
                                                from 30 days ago
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <LineChart data={data2}
                                                        margin={{top: 0, right: 5, left: 5, bottom: 0}}>
                                                    <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2}/>
                                                    <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2}/>
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-info"/>
                                                <i className="lnr-graduation-hat text-info"/>
                                            </div>
                                            <div className="widget-numbers">
                                                1.5M
                                            </div>
                                            <div className="widget-subheading">
                                                Performance
                                            </div>
                                            <div className="widget-description text-info">
                                                Down by
                                                <span className="ps-1 pe-1">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                    <span className="text-danger ps-1">54.1%</span>
                                                </span>
                                                from 30 days ago
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <ComposedChart data={data2}>
                                                    <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                                                    <Bar dataKey="pv" barSize={10} fill="#7b808a"/>
                                                    <Line type="monotone" dataKey="uv" stroke="#272631"/>
                                                </ComposedChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                            </Row>







                            <div class="card-header-title fsize-2 text-capitalize font-weight-normal mt-4 mb-2">Recent Tasks</div>

      <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Title</th>
                                                    <th className="text-center">City</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="text-center text-muted">#345</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">John Doe</div>
                                                                    <div className="widget-subheading opacity-7">Web Developer</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Madrid</td>
                                                    <td className="text-center">
                                                        <div className="badge bg-warning">Pending</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#347</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                    <div className="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Berlin</td>
                                                    <td className="text-center">
                                                        <div className="badge bg-success">Completed</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#321</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Elliot Huber</div>
                                                                    <div className="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">London</td>
                                                    <td className="text-center">
                                                        <div className="badge bg-danger">In Progress</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#55</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Vinnie Wagstaff</div>
                                                                    <div className="widget-subheading opacity-7">UI Designer</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Amsterdam</td>
                                                    <td className="text-center">
                                                        <div className="badge bg-info">On Hold</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
    </>
  )
}

export default Dashboard