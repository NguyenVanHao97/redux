const stateGioHang = {
    gioHang:[ ]
};

const GioHangReducer = (state = stateGioHang,action) => {

    switch(action.type){
       case 'THEM_GIO_HANG' :{
           let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
           if(index !== -1){
               state.gioHang[index].soLuong += 1;
           }else{
               state.gioHang.push(action.spGioHang)
           }
           state.gioHang = [...state.gioHang]
           return {...state}
       };
       break;
       case 'XOA_GIO_HANG' :{
           let gioHangCapNhat = [...state.gioHang];

           let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);

           if(index !== -1)
           {
               gioHangCapNhat.splice(index,1)
           }
           state.gioHang = gioHangCapNhat;
           return {...state}
       };
       break;
       case 'TANG_GIAM_SO_LUONG' : {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1) {
                if(action.tangGiam){
                    gioHangCapNhat[index].soLuong += 1
                }else{
                    if(gioHangCapNhat[index].soLuong>1)
                    {
                       gioHangCapNhat[index].soLuong -= 1;
                    }
                    else{
                        alert('số lượng tối thiểu là 1')
                    }
                }
            }

            state.gioHang = gioHangCapNhat;
            return {...state}
       };break;
       default : return {...state}
    }

    
}

export default GioHangReducer;