import React, { Component } from 'react'
import { connect } from "react-redux";
class CartRedux extends Component {
    render() {
        return (
           <div>
  {/* Modal */}
            <div className="modal " id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content" style={{minWidth:800}}>
                    <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" >
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Mã </th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th> giá </th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               this.props.gioHang.map((spGH,index)=>{
                                   return (
                                       <tr key={index}> 
                                            <td>{spGH.maSP.toLocaleString()}</td>
                                            <td>{spGH.tenSP}</td>
                                            <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height={50} /></td>
                                            <td>{spGH.gia}</td>
                                            <td>
                                            <p><button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,false)}} > - </button>
                                               {spGH.soLuong.toLocaleString()} 
                                                <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,true)}} > + </button>
                                                </p></td>
                                            <td>{(spGH.soLuong*spGH.gia)}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(spGH.maSP)}}>xóa</button></td>
                                       </tr>
                                   )
                               })
                           }
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" className="btn btn-primary">Thanh toán</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            };
            console.log(maSP)
            dispatch(action)
        } ,
        tangGiamSoLuong : (maSP,tangGiam)=>{
            let action = {
                type : 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartRedux);