import React, { Component } from 'react';
import './Infor.css';

class Infor extends Component {
    render() {
        return (
            <div className="gioithieu row" id="gioithieu">
                <table className="gioithieu_table ">
                    <tbody>
                        <tr>
                            <td className="gt_td col-12">
                                GIỚI THIỆU
                            </td>
                        </tr>
                        <tr>
                            <td className="content_test col-12">
                                Tháng 6/2018, hệ thống Fitness cao cấp <span className="citigym">CITIGYM</span> ra đời với
                                mục tiêu xây dựng hệ thống phòng tập hiện đại, địa điểm thuận tiện, giá cả minh bạch và
                                hợp lí.
                                Chúng tôi luôn muốn kiến tạo và lan tỏa những giá trị tốt đẹp, góp phần
                                nâng cao chất lượng cuộc sống. Biến việc tập luyện trở thành thói quen chăm sóc sức
                                khỏe cho người Việt.
                                <span className="citigym">CITIGYM</span> có Đội ngũ Huấn luyện viên trẻ đẹp,giàu kinh nghiệm
                                và trình độ chuyên môn cao. Đội ngũ Chăm sóc Khách hàng tận tâm , luôn sẵn sàng phục vụ.
                                Tại <span className="citigym">CITIGYM</span> , cơ sở vật chất hiện đại được đầu tư bài bản,
                                thiết kế phòng tập đa dạng, mang cây xanh vào không gian tập, đem lại nhiều trải nghiệm.<br />
                                Tất cả những điều này, là xuất phát từ tình yêu của <span className="citigym">CITIGYM</span> đối với
                                người Việt! <br />
                                <span className="reason"> 5 LÝ DO NÊN CHỌN CITIGYM</span> <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;1. Luôn minh bạch về giá các gói tập và quyền lợi hội viên trên tất cả
                                phương tiện truyền thông đại chúng. <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;2. Đội ngũ HLV trẻ đẹp, trình độ chuyên môn cao, đội ngũ chăm sóc khách hàng
                                tận tâm. <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;3. Thiết kế phòng tập đa dạng, mang cây xanh vào không gian tập, đem lại
                                nhiều trải nghiệm cho khách hàng. <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;4. Cơ sở vật chất hiện đại, được đầu tư bài bản. <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;5. Bộ môn luyện tập đa dạng, cho phép khách hàng có nhiều lựa chọn. <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Infor;