import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    };

    componentDidMount() {
        /*
        axios.get('/api/test')
          .then(result => this.setState({ message: result.data.message })) */
        axios.get('/api/news')
          .then(res =>{
            const news = res.data;
            this.setState({ news: news.news });
          })
          .catch(error => console.log(error));
    };
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    };
      
    handleInsertSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: '',
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
        };
        const nameItem = document.getElementById('name');
        const phoneItem = document.getElementById('phone');
        const emailItem = document.getElementById('email');
        axios.post('/api/insert', newItem)
          .then(res => {
            let news = this.state.news;
            news = [newItem,...news];
            this.setState({ news: news });
          })
          .catch(error => console.log(error)); 

        nameItem.value='';
        phoneItem.value='';
        emailItem.value='';  
        alert('Thông tin của bạn đã được ghi nhận!') ;
        
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleInsertSubmit}>
                    <table className="banner">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="tapluyen_td">
                                    TẬP LUYỆN <br />KHÔNG GIỚI HẠN
                                </td>
                            </tr>
                            <tr>
                                <td className="giatien_td">
                                    <table className="width_tb">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td className="td_empty" rowSpan={2}>
                                                </td>
                                                <td className="td_chi" rowSpan={2}>
                                                    Chỉ
                                                </td>
                                                <td className="td_399" rowSpan={2}>
                                                    399
                                                </td>
                                                <td className="td_000">
                                                    .000
                                                </td>
                                                <td className="td_vnd">
                                                    VNĐ
                                                </td>
                                                <td className="td_empty" rowSpan={2}>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td_thang">
                                                    /Tháng
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table className="width_tb">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td className="td_empty_02" />
                                                <td className="check_td">
                                                    <i className="fa fa-check" aria-hidden="true" />
                                                    Tập không giới hạn thời gian 6h - 22h
                                                </td>
                                                <td className="td_empty_02" />
                                            </tr>
                                            <tr>
                                                <td className="td_empty_02" />
                                                <td className="check_td">
                                                    <i className="fa fa-check" aria-hidden="true" />
                                                    Tập không giới hạn tại tất cả CLB
                                                </td>
                                                <td className="td_empty_02" />
                                            </tr>
                                            <tr>
                                                <td className="td_empty_02" />
                                                <td className="check_td">
                                                    <i className="fa fa-check" aria-hidden="true" />
                                                    Tập không giới hạn tại tất cả bộ môn
                                                </td>
                                                <td className="td_empty_02" />
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table className="width_tb form">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td className="td_empty_03" />
                                                <td className="input_td">
                                                    <input 
                                                        id="name" 
                                                        name="name"
                                                        type="text" 
                                                        placeholder="Họ và tên" 
                                                        onChange={this.handleInputChange} 
                                                        required
                                                        pattern="[/^(?:[\$A-Z_a-z\u00C0\u00C1\u00C2\u00C3\u00C8\u00C9\u00CA\u00CC\u00CD\u00D2\u00D3\u00D4\u00D5\u00D9\u00DA\u00DD
                                                            \u00E0\u00E1\u00E2\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2\u00F3\u00F4\u00F5\u00F9\u00FA\u00FD
                                                            \u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A1\u01AF\u01B0
                                                            \u1EA0\u1EA1\u1EA2\u1EA3\u1EA4\u1EA5\u1EA6\u1EA7\u1EA8\u1EA9\u1EAA\u1EAB\u1EAC\u1EAD\u1EAE\u1EAF
                                                            \u1EB0\u1EB1\u1EB2\u1EB3\u1EB4\u1EB5\u1EB6\u1EB7\u1EB9\u1EBB\u1EBD\u1EBE\u1EBF
                                                            \u1EC1\u1EC2\u1EC4\u1EC5\u1EC7\u1EC8\u1ECA\u1ECC\u1ECE
                                                            \u1ED0\u1ED1\u1ED2\u1ED3\u1ED4\u1ED5\u1ED6\u1ED7\u1ED8\u1ED9\u1EDA\u1EDB\u1EDC\u1EDD\u1EDE\u1EDF
                                                            \u1EE0\u1EE1\u1EE2\u1EE3\u1EE4\u1EE5\u1EE6\u1EE7\u1EE8\u1EE9\u1EEA\u1EEB\u1EEC\u1EED\u1EEE\u1EEF
                                                            \u1EF0\u1EF1\u1EF2\u1EF3\u1EF4\u1EF5\u1EF6\u1EF7\u1EF8\u1EF9)*$/]{1,50}"
                                                        title="Vui lòng nhập tên của bạn. Tên sẽ không bao gồm các ký tự đặc biệt và số"
                                            
                                                    />
                                                </td>
                                                <td className="td_empty_03" />
                                            </tr>
                                            <tr>
                                                <td className="td_empty_03" />
                                                <td className="input_td">
                                                    <input 
                                                        id="phone" 
                                                        name="phone"
                                                        type="text" 
                                                        placeholder="Số điện thoại" 
                                                        onChange={this.handleInputChange} 
                                                        required
                                                        pattern="(\+84|0)\d{9,10}"
                                                        title="Số điện thoại sẽ không ít hơn 10 chữ số và không nhiều hơn 11 chữ số."
                                                    />
                                                </td>
                                                <td className="td_empty_03" />
                                            </tr>
                                            <tr>
                                                <td className="td_empty_03" />
                                                <td className="input_td">
                                                    <input 
                                                        id="email" 
                                                        name="email"
                                                        type="email" 
                                                        placeholder="Email" 
                                                        onChange={this.handleInputChange} 
                                                        pattern="[^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$]{1,50}"
                                                        title="Vui lòng nhập email đúng định dạng."
                                                    />
                                                </td>
                                                <td className="td_empty_03" />
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table className="width_tb form">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td className="td_empty_04" />
                                                <td className="button_td">
                                                    <button id="button_td" type="submit">NHẬN TƯ VẤN NGAY</button>
                                                </td>
                                                <td className="td_empty_04" />
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                    <p className="note_banner">*Chương trình ưu đãi áp dụng đến hết 15/07 hoặc đến khi hết số lượng.</p>
                </form>
            </div>
        )
    }
}

export default Form;
