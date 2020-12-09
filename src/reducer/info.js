import * as types from './../constant/actionTypes';
const initialInfo = [
    { txttitle: 'sóng', Author: 'xuân quỳnh', date: '2020-10-20', content: '-  Bài thơ Sóng Xuân Quỳnh được sáng tác năm 1967, lấy cảm hứng trong một chuyến đi thực tế tại bãi biển Diêm Điền – Thái Bình và in trong tập Hoa dọc chiến hào. - Đây là bài thơ tình yêu nổi tiếng nhất tiêu biểu cho phong cách thơ nữ tính, trữ tình của Xuân Quỳnh.', category: 'poem' }
    , {
        txttitle: 'vợ chồng a phủ', Author: 'Tô Hoài', date: '2020-11-25', category: 'comic book', content: 'Truyện được viết vào năm 1952 và là sản phẩm của chuyến thâm nhập thực tế, “cùng ăn, cùng ở, cùng gắn bó” với đồng bào các dân tộc miền núi Tây Bắc suốt 8 tháng của Tô Hoài trên núi cao đến các bản làng mới giải phóng.'
    }
];

const myReducer = (state = initialInfo, action) => {
    switch (action.type) {
        case types.INFO_CONTENT:
            return state;
        default: return state;
    }
}
export default myReducer;