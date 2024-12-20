import React from 'react'
import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';
import avatar1 from '../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../assets/utils/images/avatars/4.jpg';
function Team() {
  return (
    <>
     
     <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
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
                                                                <div className="widget-content-left me-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                    </div>
                                                                </div>
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
                                                                <div className="widget-content-left me-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                    </div>
                                                                </div>
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
                                                                <div className="widget-content-left me-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                    </div>
                                                                </div>
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
                                                                <div className="widget-content-left me-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar1} alt="Avatar" /></div>
                                                                </div>
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

export default Team