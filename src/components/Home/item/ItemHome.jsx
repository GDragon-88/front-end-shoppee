import "../item/item.css";


export function ItemHome(){

    const listData = ['../img/anh5.png','../img/anh7.png','../img/anh9.png','../img/anh10.png','../img/anh11.png','../img/anh12.png','../img/anh16.png','../img/anh17.png','../img/anh4.png'];
    const conTent = ['Gì Cũng Rẻ - Mua Là Freeship','Mã Giảm Giá',
'Miễn Phí Vận Chuyển','Bắt Trend - Giá Sốc','Hàng Hiệu Giá Tốt','Hàng Quốc Tế','Chia Kho Xu 30 Triệu','Hoàn Xu Xtra Từ 100K','Nạp Điện Thoại & Thẻ Game']
    return (
        <>
            <div className="item-home">
                {listData.map((i,index)=>(
                    <div className="item-home-child" key={index}>
                    <img src={i} alt=""/>
                    <span>{conTent[index]}</span>
                </div>
                ))}
            </div>
        
        </>
    )
}