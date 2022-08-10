import React, { Component } from 'react';
import './Equipment.css';

class Equipment extends Component {
    render() {
        return (
            <div className="trangthietbi row">
                <table className="trangthietbi_tb ">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="trangthietbi_title col-12" colSpan={4} >
                                TRANG THIẾT BỊ ĐẲNG CẤP
                            </td>
                        </tr>
                        <tr>
                            <td className="trangthietbi_content col-12" colSpan={4}>
                                Tại CITIGYM chúng tôi trang bị những thiết bị hiện đại bậc nhất trên thế giới,
                                được nhập khẩu từ Mỹ với các thương hiệu nổi tiếng như Life Fitness, Technogym, Reebok...
                                Ngoài ra còn trang bị cho hội viên những cơ sở vật chất lần đầu tiên và duy nhất có tại Việt Nam,
                                cùng các bản quyền lớp học chuẩn quốc tế.
                            </td>
                        </tr>
                        <tr>
                            <td className="trangthietbi_conchild_001 col-3">
                                <table className="width_tb">
                                    <tbody>
                                        <tr>
                                            <td className="img_ttb">
                                                <img id="img_ttb_001" src="./img_trangthietbi/maytap.jpg" alt="Đây là img"  />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="titile_ttb">
                                                THIẾT BỊ HIỆN ĐẠI
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content_ttb">
                                                Thiết bị hiện đại đa dạng và có số lượng lớn, có kết nối Internet giúp tối ưu hóa trải
                                                nghiệm hội viên.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="trangthietbi_conchild_002 col-3">
                                <table className="width_tb ">
                                    <tbody>
                                        <tr>
                                            <td className="img_ttb">
                                                <img id="img_ttb_002" src="./img_trangthietbi/santap.jpg" alt="Đây là img"  />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="titile_ttb">
                                                SÀN TẬP REPHOUSE
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content_ttb">
                                                Sàn “nhựa không thở”, không mùi, không trượt, hạn chế chấn thương, đảm bảo an toàn cho
                                                việc tập luyện của hội viên. Duy nhất chỉ có tại CITIGYM.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="trangthietbi_conchild_003 col-3">
                                <table className="width_tb ">
                                    <tbody>
                                        <tr>
                                            <td className="img_ttb">
                                                <img id="img_ttb_003" src="./img_trangthietbi/khonggian.jpg" alt="Đây là img"  />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="titile_ttb">
                                                KHÔNG GIAN XANH
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content_ttb">
                                                Kiến trúc theo phong cách “khu rừng” độc đáo, duy nhất chỉ có tại CITIGYM.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="trangthietbi_conchild_004 col-3">
                                <table className="width_tb">
                                    <tbody>
                                        <tr>
                                            <td className="img_ttb">
                                                <img id="img_ttb_004" src="./img_trangthietbi/tulooker.jpg" alt="Đây là img"  />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="titile_ttb">
                                                TỦ LOCKER THÔNG MINH
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content_ttb">
                                                Hệ thống khóa từ thông minh bảo mật tối đa Esmart Lock đầu tiên tại Việt Nam.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        )
    }
}

export default Equipment;