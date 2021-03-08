import React, { Component } from 'react'
import { connect } from "react-redux";
  class ProductItemRedux extends Component {
    render() {

        let {sanpham} = this.props;
        return (
            <div className="col-4 mt-3">
                <div className="card">
                 <div className="card text-left">
            <img className="card-img-top" src={sanpham.hinhAnh} alt />
            <div className="card-body">
                <h4 className="card-title">{sanpham.tenSP}</h4>
                <p className="card-text">{sanpham.gia}</p>
                <button className="btn btn-success" onClick={()=>{this.props.themGioHang(sanpham)}}>mua sản phẩm</button>
                <button className="btn btn-danger ml-3" onClick={()=> this.props.xemchitiet(sanpham)}  data-bs-toggle="modal" data-bs-target="#exampleModal">xem chi tiết </button>
            </div>
            </div>
            </div>
            </div>
        )
    } 
}
const mapDispatchToProps = (dispatch) => {
        return{
            themGioHang: (sanPham) => {
                let spGioHang = {
                    maSP:sanPham.maSP, 
                    tenSP:sanPham.tenSP , 
                    hinhAnh: sanPham.hinhAnh,
                    gia : sanPham.gia,
                    soLuong:1, 
                }
                console.log('sp',spGioHang)
                let action = {
                    type:'THEM_GIO_HANG',
                    spGioHang
                }
                dispatch(action)
            }
        }
}



export default connect(null,mapDispatchToProps)(ProductItemRedux)