import React, { Component } from 'react'
import ProductItemRedux from './ProductItemRedux'

class ProductListRedux extends Component {
    
    mangSanPham =[
        {"maSP" : 1 ,loaiSP:"phone", "tenSP" : "Samsung Galaxy S21 5G" , "manHinh" : "Dynamic AMOLED 2X, 6.2, Full HD+" , "heDieuHanh" : "Android 11","cameraTruoc" : "10 MP","camareSau":"Chính 12 MP & Phụ 64 MP, 12 MP","ram":"8 GB","rom":"128 GB","gia" : "20.990.000đ","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg"},
        {"maSP" : 2 ,loaiSP:"phone","tenSP" : "iPhone 12 mini 64GB" , "manHinh" : "OLED, 5.4, Super Retina XDR" , "heDieuHanh" : "iOS 14","cameraTruoc" : "12 MP","camareSau":"2 camera 12 MP","ram":"4 GB","rom":"64 GB","gia" : "21.990.000đ","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-vang-new-600x600-600x600.jpg"},
        {"maSP" : 3 ,loaiSP:"phone", "tenSP" : "Vivo V20" , "manHinh" : "AMOLED, 6.44, Full HD+" , "heDieuHanh" : "Android 11","cameraTruoc" : "44 MP","camareSau":"	Chính 64 MP & Phụ 8 MP, 2 MP","ram":"8 GB","rom":"128 GB","gia" : "7.490.000đ","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/233130/xiaomi-redmi-9t-6gb-110621-080650-600x600.jpg"},
        // {"maSP" : 4 ,loaiSP:"phone", "tenSP" : "iPhone SE 128GB (2020)" , "manHinh" : "IPS LCD" , "heDieuHanh" : "iOS 14","cameraTruoc" : "10 MP","camareSau":"	12 MP","ram":"3 GB","rom":"128 GB","gia" : "11.040.000đ","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/222629/iphone-se-128gb-2020-trang-600x600.jpg"},
        // {"maSP" : 5 ,loaiSP:"phone","tenSP" : "iPhone 12 mini 64GB" , "manHinh" : "	OLED, 5.4, Super Retina XDR" , "heDieuHanh" : "iOS 14","cameraTruoc" : "12 MP","camareSau":"2 camera 12 MP","ram":"4 GB","rom":"64 GB","gia" : "17.790.000đ","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/228741/iphone-mini-do-new-600x600-600x600.jpg"},
        // {"maSP" : 6 ,loaiSP:"phone", "tenSP" : "Samsung Galaxy Note 20" , "manHinh" : "Super AMOLED Plus, 6.7, Full HD+" , "heDieuHanh" : "Android 11","cameraTruoc" : "10 MP","camareSau":"Chính 12 MP & Phụ 64 MP, 12 MP","ram":"8 GB","rom":"256 GB","gia" : "18.990.000₫","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/218355/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg"},
        // {"maSP" : 7 ,loaiSP:"phone", "tenSP" : "Samsung Galaxy S21 5G" , "manHinh" : "	Super AMOLED, 6.7, Full HD+" , "heDieuHanh" : "	Android 9 (Pie)","cameraTruoc" : "32 MP","camareSau":"	Chính 32 MP & Phụ 8 MP, 5 MP, 12 MP","ram":"6 GB","rom":"128 GB","gia" : "7.990.000₫","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-053720-073758-600x600.jpg"},
        // {"maSP" : 8 ,loaiSP:"phone","tenSP" : "Vivo Y30" , "manHinh" : "OLED, 5.4, Super Retina XDR" , "heDieuHanh" : "iOS 14","cameraTruoc" : "12 MP","camareSau":"2 camera 12 MP","ram":"4 GB","rom":"64 GB","gia" : "3.990.000₫","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/222585/vivo-y30-xanh-new-600x600-600x600.jpg"},
        // {"maSP" : 9 ,loaiSP:"phone", "tenSP" : "Vivo V20" , "manHinh" : "	IPS LCD, 6.47, HD+" , "heDieuHanh" : "	Android 10","cameraTruoc" : "10 MP","camareSau":"	Chính 13 MP & Phụ 8 MP, 2 MP, 2 MP","ram":"8 GB","rom":"128 GB","gia" : "4.490.000₫","hinhAnh":"https://cdn.tgdd.vn/Products/Images/42/233130/xiaomi-redmi-9t-6gb-110621-080650-600x600.jpg"},
        
    ];
    constructor(props){
        super(props);
        this.state={
            detail:this.mangSanPham['0']
        }
    }
    renderProductItem = () => {
            return this.mangSanPham.map((sanpham,index)=>{
                return (
                <ProductItemRedux key={index} sanpham={sanpham} xemchitiet={this.xemchitiet} />
                 )
            })
    }
    xemchitiet = (sanPham) =>{
        this.setState({
            detail:sanPham
        })
    }
    render() {
        let {detail} = this.state;
        return (
            <div>
            <div className="row">
                {this.renderProductItem()}
            </div>
            <div className="row text-center ">
                <div className="col-6">
                <h3 className="">{detail.tenSP}</h3>
                    <img src={detail.hinhAnh} alt width={250} height={300}/>
                </div>
                <div className="col-6">
                    <h3>Thông số kĩ thuật</h3>
                    <table className="table">
                        <tr>
                            <th>
                                Màn hình
                            </th>
                            <th>
                                {detail.manHinh}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Hệ điều hành
                            </th>
                            <th>
                                {detail.heDieuHanh}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Camere trước
                            </th>
                            <th>
                                {detail.cameraTruoc}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Camera sau
                            </th>
                            <th>
                                {detail.camareSau}
                            </th>
                        </tr>
                        <tr>
                            <th>
                            Ram
                            </th>
                            <th>
                                {detail.ram}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Rom
                            </th>
                            <th>
                                {detail.rom}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Giá
                            </th>
                            <th>
                                {detail.gia.toLocaleString()}
                            </th>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        
        )
    }
}


export default ProductListRedux;