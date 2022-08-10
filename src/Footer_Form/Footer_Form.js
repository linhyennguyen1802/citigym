import React, { Component } from 'react';
import './Footer_Form.css';
import Form from '../Form/Form';
class Footer_Form extends Component {
    render() {
        return (
            <div className="dangky" id="dangky">
                <div className="col-5 content_banner ">
                    <Form></Form>
                </div>
                <div className="col-7 dangky_infor">
                    <div className="dangky_img">
                        CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN DỊCH VỤ <br /> <span className="citigym">CITIGYM</span>
                    </div>
                    <div className="dangky_content">
                        <table className="width_tb footleft">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className="x">
                                        1900633638
                                    </td>
                                    <td className="icon">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="x">
                                        lienhe.citigym@gmail.com
                                    </td>
                                    <td className="icon">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="x">
                                        www.citigym.com.vn
                                    </td>
                                    <td className="icon">
                                        <i className="fa fa-globe" aria-hidden="true" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="x">
                                        52 Thành Thái, Phường 12,
                                        Quận 10, Thành phố Hồ Chí Minh
                                    </td>
                                    <td className="icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"> </i>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer_Form;