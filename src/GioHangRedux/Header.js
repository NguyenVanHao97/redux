import React, { Component } from 'react'
import {connect} from 'react-redux';

class Header extends Component {
    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong,spGH,index)=>{
            return tongSoLuong +=  spGH.soLuong;
        },0);
    }
    render() {
        return (
                <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Navbar</a>
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="tìm kiếm sản phẩm" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className="text-right">
                    <span style={{width:20,cursor:'pointer'}} 
                    data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5">
                            <i className="fa fa-cart-arrow-down"></i>
                            ({this.renderSoLuong()}) sản phẩm
                        </i>
                    </span>
                </div>
                </nav>
        </div>

        )
    }
}
const mapStateToProps = (state) =>{
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(Header)