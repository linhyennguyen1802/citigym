import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header" id="header">
                <table className="header_table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="header_left">
                                <div className="logo_header">
                                    <img id="logo_header" src="./logo_header/logo.png" alt="Đây là img"  ></img>
                                </div>
                            </td>
                            <td className="header_right">
                                <div className="topnav" id="myTopnav">
                                    <a href="#dangky">LIÊN HỆ</a>
                                    <a href="#hethong">HỆ THỐNG </a>
                                    <a href="#dichvu">DỊCH VỤ </a>
                                    <a href="#gioithieu">GIỚI THIỆU</a>
                                </div>
                                <div className="dropdown">
                                    <button onClick={() => { mydrop() }} className="dropbtn">&#9776;</button>
                                    <div id="myDropdown" className="dropdown-content ">
                                        <table className="header_mobile_table">
                                            <thead></thead>
                                            <tbody>
                                                <tr>
                                                    <td className="hmt_td">
                                                        <a href="#gioithieu">GIỚI THIỆU</a>
                                                    </td>
                                                    <td className="hmt_td">
                                                        <a href="#dichvu">DỊCH VỤ </a>
                                                    </td>
                                                    <td className="hmt_td">
                                                        <a href="#hethong">HỆ THỐNG </a>
                                                    </td>
                                                    <td className="hmt_td">
                                                        <a href="#dangky">LIÊN HỆ</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot></tfoot>
                                        </table>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        )
    }
}

// Dropdown button
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function mydrop() {
    document.getElementById("myDropdown").classList.toggle("show");
} // Close the dropdown menu if the user clicks outside of it


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
  
  
  
export default Header;