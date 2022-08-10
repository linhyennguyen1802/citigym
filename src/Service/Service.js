import React, { Component } from 'react';
import './Service.css';
import 'react-slideshow-image/dist/styles.css'


class Service extends Component {
    constructor(props) {
        super(props);
        this.state = { pic: 1 }
    }
    next() {
        this.setState({
            pic: this.state.pic === 6 ? 6 : this.state.pic + 1
        })
    }
    prev() {
        this.setState({
            pic: this.state.pic === 1 ? 1 : this.state.pic - 1
        })
    }
    render() {
        return (
            <div className="dichvu row" id="dichvu">
                <table className="dichvu_table row">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="dichvu_tittle col-12" colSpan={2}>
                                DỊCH VỤ ĐA DẠNG
                            </td>
                        </tr>
                        <tr>
                            <td className="dichvu_content col-6">
                                <p className="dichvu_content_001">
                                    Chương trình luyện tập khoa học và phù hợp từ chuyên gia sẽ giúp hội viên được mục tiêu sức khỏe
                                    và hình thể.
                                    Bên cạnh đó, CITIGYM mong muốn mang lại niềm vui, hạnh phúc cho hội viên bằng cách đa dạng nhiều
                                    hình thức luyện tập.
                                </p>
                                <p className="dichvu_content_002">
                                </p><ul>
                                    <li>
                                        Gym (Có dịch vụ HLV hướng dẫn)
                                    </li>
                                    <li>
                                        Yoga cùng HLV Ấn Độ (Có lớp cơ bản - nâng cao)
                                    </li>
                                    <li>
                                        Group X (Bản quyền lớp học LesMill - Tập theo nhóm với các dụng cụ hiện đại - Hòa mình vào
                                        cùng âm nhạc - có HLV hướng dẫn MIỄN PHÍ
                                    </li>
                                    <li>
                                        Tập luyện từ 06h00 - 22h00
                                    </li>
                                </ul>
                                <p />
                            </td>
                            <td className="dichvu_img col-6">
                                <div className="div-album">
                                    <img className="hinh" src={"./img_dichvu/img_00" + this.state.pic + ".jpg"} alt="Đây là img" ></img>
                                    <hr></hr>
                                    <button className="next_click" onClick={() => this.next()}> &rarr; </button>
                                    <button className="pre_click" onClick={() => this.prev()}> &larr; </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default Service;