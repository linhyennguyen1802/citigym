import React, { Component } from 'react';
import './Banner_Form.css';
import Form from '../Form/Form';

class Banner_Form extends Component {
    render() {
        return (
            <div className="content row">
                <div className="col-7 img_banner ">
                    <div className="include_img">
                        <img id="tieuvy" src="./img_banner/tieuvy.png" alt="Đây là img" />
                    </div>
                </div>
                <div className="col-5 content_banner ">
                    <Form></Form>
                </div>
            </div>
        )
    }
}

export default Banner_Form;