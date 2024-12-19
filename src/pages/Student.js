import React, { useState } from 'react';
import { EuiLink, EuiPageTemplate, EuiText, EuiBasicTable, EuiSpacer, EuiPanel, EuiFlexGroup, EuiFlexItem, EuiSelect, EuiFormRow, EuiIcon } from '@elastic/eui';

export default function Student() {
    const [isSideBar, setIsSideBar] = useState(false);  // Trạng thái Sidebar
    const [selectedHocKi, setSelectedHocKi] = useState('Kỳ 1');  // Trạng thái lựa chọn Học kỳ
    const [selectedNamHoc, setSelectedNamHoc] = useState('2024-2025');  // Trạng thái lựa chọn Năm học

    const openSideBar = () => setIsSideBar(!isSideBar);  // Hàm mở Sidebar
    const closeSideBar = () => setIsSideBar(false);     // Hàm đóng Sidebar

    // Cập nhật các cột trong bảng Thời khóa biểu
    const columns = [
        { field: "TietHoc", name: "Tiết học" },
        { field: "Thu2", name: "Thứ hai" },
        { field: "Thu3", name: "Thứ ba" },
        { field: "Thu4", name: "Thứ tư" },
        { field: "Thu5", name: "Thứ năm" },
        { field: "Thu6", name: "Thứ sáu" },
        { field: "Thu7", name: "Thứ bảy" },
        { field: "HocKi", name: "Học kỳ" },  
        { field: "NamHoc", name: "Năm học" }  
    ];

    // Dữ liệu cho bảng Thời khóa biểu với các thông tin về Học kỳ và Năm học
    const items = [
        { 'TietHoc': 1, 'Thu2': 'Toán', 'Thu3': 'Toán', "Thu4": 'Toán', "Thu5": 'Toán', 'Thu6': 'Toán', 'Thu7': 'Toán', 'HocKi': 'Kỳ 1', 'NamHoc': '2024-2025' },
        { 'TietHoc': 2, 'Thu2': 'Vật lý', 'Thu3': 'Toán', "Thu4": 'Toán', "Thu5": 'Toán', 'Thu6': 'Toán', 'Thu7': 'Toán', 'HocKi': 'Kỳ 1', 'NamHoc': '2024-2025' },
        { 'TietHoc': 3, 'Thu2': 'Ngữ văn', 'Thu3': 'Toán', "Thu4": 'Toán', "Thu5": 'Toán', 'Thu6': 'Toán', 'Thu7': 'Toán', 'HocKi': 'Kỳ 1', 'NamHoc': '2024-2025' },
        { 'TietHoc': 4, 'Thu2': 'Hóa học', 'Thu3': 'Toán', "Thu4": 'Toán', "Thu5": 'Toán', 'Thu6': 'Toán', 'Thu7': 'Toán', 'HocKi': 'Kỳ 1', 'NamHoc': '2024-2025' },
        { 'TietHoc': 5, 'Thu2': 'Tiếng anh', 'Thu3': 'Toán', "Thu4": 'Toán', "Thu5": 'Toán', 'Thu6': 'Toán', 'Thu7': 'Toán', 'HocKi': 'Kỳ 2', 'NamHoc': '2024-2025' }
    ];

    // Dữ liệu cho bảng Sự kiện
    const eventColumns = [
        { field: "eventName", name: "Tên sự kiện/hoạt động" },
        { field: "organizer", name: "Đơn vị tổ chức" },
        { field: "email", name: "Email" },
        { field: "eventTime", name: "Thời gian diễn ra" },
    ];

    const eventItems = [
        { 'eventName': 'Hội thảo lập trình', 'organizer': 'Công ty XYZ', 'email': 'contact@xyz.com', 'eventTime': '10:00 AM, 12/12/2024' },
        { 'eventName': 'Chương trình đào tạo', 'organizer': 'Trường Đại học ABC', 'email': 'info@abc.edu.vn', 'eventTime': '9:00 AM, 15/12/2024' },
        { 'eventName': 'Cuộc thi hackathon', 'organizer': 'Tech Hub', 'email': 'support@techhub.com', 'eventTime': '2:00 PM, 20/12/2024' },
        { 'eventName': 'Hội thảo lập trình', 'organizer': 'Công ty XYZ', 'email': 'contact@xyz.com', 'eventTime': '10:00 AM, 12/12/2024' },
    ];

    // Options cho Học kỳ và Năm học
    const hocKiOptions = [
        { value: 'Kỳ 1', text: 'Kỳ 1' },
        { value: 'Kỳ 2', text: 'Kỳ 2' },
    ];

    const namHocOptions = [
        { value: '2024-2025', text: '2024-2025' },
        { value: '2025-2026', text: '2025-2026' },
    ];

    return (
        <>
            <EuiPageTemplate style={{ height: '100vh', padding: 0, margin: 0 }}>
                {/* Sidebar */}
                {isSideBar && (
                    <EuiPageTemplate.Sidebar paddingSize="m" minWidth="300px">
                        {/* Sidebar content */}
                    </EuiPageTemplate.Sidebar>
                )}

                {/* Main Header */}
                <EuiPageTemplate.Header paddingSize="m" pageTitle={<EuiText><h2>Trang chủ</h2></EuiText>} />

                {/* Thời khóa biểu và chọn học kỳ, năm học */}
                <EuiPageTemplate.Section color="plain" style={{ flex: 1, height: 'calc(100vh - 180px)', overflow: 'auto', margin: 0, padding: 0 }}>
                    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="l" style={{ margin: 0 }}>
                        <EuiFlexItem grow={false}>
                            <EuiText>
                                <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                                    <EuiIcon type="calendar" size="m" style={{ marginRight: '8px' }} />
                                    Thời khóa biểu
                                </h3>
                            </EuiText>
                        </EuiFlexItem>

                        {/* Mục chọn Học kỳ và Năm học */}
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize="s" alignItems="center">
                                {/* Mục chọn Học kỳ */}
                                <EuiFlexItem grow={false}>
                                    <EuiFormRow label="Học kỳ">
                                        <EuiSelect
                                            options={hocKiOptions}
                                            value={selectedHocKi}
                                            onChange={(e) => setSelectedHocKi(e.target.value)}
                                        />
                                    </EuiFormRow>
                                </EuiFlexItem>

                                {/* Mục chọn Năm học */}
                                <EuiFlexItem grow={false}>
                                    <EuiFormRow label="Năm học">
                                        <EuiSelect
                                            options={namHocOptions}
                                            value={selectedNamHoc}
                                            onChange={(e) => setSelectedNamHoc(e.target.value)}
                                        />
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer size="m" />
                    <EuiBasicTable tableLayout="auto" columns={columns} items={items.filter(item => item.HocKi === selectedHocKi && item.NamHoc === selectedNamHoc)} />
                </EuiPageTemplate.Section>

                {/* FlexGroup chứa 2 panel Sự kiện và Kết quả học tập */}
                <EuiPageTemplate.Section color="plain" style={{ flex: 1, overflow: 'auto', margin: 0, padding: 0 }}>
                    <EuiFlexGroup gutterSize="l">
                        {/* Panel Sự kiện */}
                        <EuiFlexItem style={{ maxWidth: '100%', width: '100%' }}>
                            <EuiPanel paddingSize="l">
                                <EuiText>
                                    <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                                        <EuiIcon type="bell" size="m" style={{ marginRight: '8px' }} />
                                        Sự kiện
                                    </h3>
                                </EuiText>
                                <EuiSpacer size="m" />
                                <EuiBasicTable
                                    tableLayout="auto"
                                    columns={eventColumns}
                                    items={eventItems}
                                />
                            </EuiPanel>
                        </EuiFlexItem>

                        {/* Panel Kết quả học tập */}
                        <EuiFlexItem style={{ maxWidth: '395px', width: '100%' }}>
                            <EuiPanel paddingSize="l">
                                <EuiText>
                                    <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                                        <EuiIcon type="training" size="m" style={{ marginRight: '8px' }} />
                                        Kết quả học tập
                                    </h3>
                                </EuiText>
                                <EuiSpacer size="m" />
                                <EuiText>
                                    <p><strong>Điểm trung bình năm học:</strong></p>
                                    <div style={{ fontWeight: 'bold', fontSize: '36px', lineHeight: '1.5' }}>3.5/4.0</div>
                                </EuiText>
                        
                                {/* Mục kết quả trung bình */}
                                <EuiText>
                                    <p><strong>Điểm trung bình:</strong></p>
                                    <div style={{ fontWeight: 'bold', fontSize: '36px', lineHeight: '1.5' }}>3.5/4.0</div>
                                </EuiText>
                            </EuiPanel>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPageTemplate.Section>
            </EuiPageTemplate>
        </>
    );
}
