// Danh sách chuẩn hóa 32 mã cổ phiếu của DOBN Capital
const stockDatabase = [
    { code: "BID", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", type: "Conservative", logo: "https://via.placeholder.com/50?text=BID" },
    { code: "BVH", name: "Tập đoàn Bảo Việt", type: "Conservative", logo: "https://via.placeholder.com/50?text=BVH" },
    { code: "CTR", name: "Tổng Công ty Cổ phần Công trình Viettel", type: "Balanced", logo: "https://via.placeholder.com/50?text=CTR" },
    { code: "CTG", name: "Ngân hàng TMCP Công thương Việt Nam", type: "Balanced", logo: "https://via.placeholder.com/50?text=CTG" },
    { code: "DCM", name: "Công ty Cổ phần Phân bón Dầu khí Cà Mau", type: "Aggressive", logo: "https://via.placeholder.com/50?text=DCM" },
    { code: "DGW", name: "Công ty Cổ phần Thế Giới Số", type: "Aggressive", logo: "https://via.placeholder.com/50?text=DGW" },
    { code: "DPM", name: "Tổng Công ty Phân bón và Hóa chất Dầu khí", type: "Aggressive", logo: "https://via.placeholder.com/50?text=DPM" },
    { code: "DXG", name: "Công ty Cổ phần Tập đoàn Đất Xanh", type: "Aggressive", logo: "https://via.placeholder.com/50?text=DXG" },
    { code: "FPT", name: "Công ty Cổ phần FPT", type: "Balanced", logo: "https://via.placeholder.com/50?text=FPT" },
    { code: "GAS", name: "Tổng Công ty Khí Việt Nam", type: "Conservative", logo: "https://via.placeholder.com/50?text=GAS" },
    { code: "GEX", name: "Công ty Cổ phần Tập đoàn GELEX", type: "Aggressive", logo: "https://via.placeholder.com/50?text=GEX" },
    { code: "GMD", name: "Công ty Cổ phần Gemadept", type: "Balanced", logo: "https://via.placeholder.com/50?text=GMD" },
    { code: "HCM", name: "Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh", type: "Aggressive", logo: "https://via.placeholder.com/50?text=HCM" },
    { code: "HDB", name: "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh", type: "Balanced", logo: "https://via.placeholder.com/50?text=HDB" },
    { code: "HPG", name: "Công ty Cổ phần Tập đoàn Hòa Phát", type: "Balanced", logo: "https://via.placeholder.com/50?text=HPG" },
    { code: "KDH", name: "Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền", type: "Aggressive", logo: "https://via.placeholder.com/50?text=KDH" },
    { code: "MBB", name: "Ngân hàng TMCP Quân đội", type: "Balanced", logo: "https://via.placeholder.com/50?text=MBB" },
    { code: "MSN", name: "Công ty Cổ phần Tập đoàn Masan", type: "Aggressive", logo: "https://via.placeholder.com/50?text=MSN" },
    { code: "MWG", name: "Công ty Cổ phần Đầu tư Thế Giới Di Động", type: "Aggressive", logo: "https://via.placeholder.com/50?text=MWG" },
    { code: "NVL", name: "Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va", type: "Aggressive", logo: "https://via.placeholder.com/50?text=NVL" },
    { code: "PLX", name: "Tập đoàn Xăng dầu Việt Nam", type: "Conservative", logo: "https://via.placeholder.com/50?text=PLX" },
    { code: "REE", name: "Công ty Cổ phần Cơ điện lạnh", type: "Conservative", logo: "https://via.placeholder.com/50?text=REE" },
    { code: "SSI", name: "Công ty Cổ phần Chứng khoán SSI", type: "Aggressive", logo: "https://via.placeholder.com/50?text=SSI" },
    { code: "TCB", name: "Ngân hàng TMCP Kỹ thương Việt Nam", type: "Balanced", logo: "https://via.placeholder.com/50?text=TCB" },
    { code: "VCB", name: "Ngân hàng TMCP Ngoại thương Việt Nam", type: "Conservative", logo: "https://via.placeholder.com/50?text=VCB" },
    { code: "VCI", name: "Công ty Cổ phần Chứng khoán Vietcap", type: "Aggressive", logo: "https://via.placeholder.com/50?text=VCI" },
    { code: "VHM", name: "Công ty Cổ phần Vinhomes", type: "Aggressive", logo: "https://via.placeholder.com/50?text=VHM" },
    { code: "VIC", name: "Tập đoàn Vingroup", type: "Aggressive", logo: "https://via.placeholder.com/50?text=VIC" },
    { code: "VJC", name: "Công ty Cổ phần Hàng không VietJet", type: "Aggressive", logo: "https://via.placeholder.com/50?text=VJC" },
    { code: "VRE", name: "Công ty Cổ phần Vincom Retail", type: "Aggressive", logo: "https://via.placeholder.com/50?text=VRE" },
    { code: "VTP", name: "Tổng Công ty Cổ phần Bưu chính Viettel", type: "Balanced", logo: "https://via.placeholder.com/50?text=VTP" },
    { code: "YEG", name: "Công ty Cổ phần Tập đoàn Yeah1", type: "Aggressive", logo: "https://via.placeholder.com/50?text=YEG" }
];

// Thuật toán chọn lọc tự động 5 mã cổ phiếu dựa trên số điểm khảo sát
function getRecommendations(score) {
    let riskCategory = "Balanced";
    if (score <= 5) riskCategory = "Conservative";
    else if (score > 10) riskCategory = "Aggressive";

    // Lọc danh sách mã trùng khớp với loại hình rủi ro của khách
    let filtered = stockDatabase.filter(stock => stock.type === riskCategory);
    
    // Xáo trộn ngẫu nhiên danh sách đã lọc để mỗi khách hàng ra một tổ hợp ngẫu nhiên khác nhau (tăng tính khách quan)
    filtered.sort(() => 0.5 - Math.random());
    
    // Nếu trong nhóm không đủ 5 mã, tự động lấy bù từ các nhóm khác
    if (filtered.length < 5) {
        let leftovers = stockDatabase.filter(stock => stock.type !== riskCategory).sort(() => 0.5 - Math.random());
        filtered = [...filtered, ...leftovers];
    }
    
    return filtered.slice(0, 5); // Trả về đúng 5 mã tối ưu
}

// Hàm kết nối lưu thông tin về Google Sheet
function sendToGoogleSheet(formData) {
    // URL action form của Google Form (Thay ID form của bạn vào đây)
    const formURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    
    const data = new FormData();
    data.append("entry.111111111", formData.name); 
    data.append("entry.222222222", formData.phone);
    data.append("entry.333333333", formData.assets);
    data.append("entry.444444444", formData.debts);
    data.append("entry.555555555", formData.riskScore);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    }).then(() => console.log("Dữ liệu khách hàng đã đồng bộ sang Google Sheet thành công!"))
      .catch(err => console.error("Lỗi kết nối đồng bộ:", err));
}
