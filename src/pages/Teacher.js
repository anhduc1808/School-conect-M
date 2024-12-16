import React from 'react';
import {
    EuiPageTemplate,
    EuiText,
    EuiBasicTable,
    EuiSpacer,
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon
} from '@elastic/eui';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, ChartData } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Import plugin

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export default function TeacherDashboard() {
    // Dữ liệu Thời khóa biểu
    const timetableColumns = [
        { field: "TietHoc", name: "Tiết học" },
        { field: "Thu2", name: "Thứ hai" },
        { field: "Thu3", name: "Thứ ba" },
        { field: "Thu4", name: "Thứ tư" },
        { field: "Thu5", name: "Thứ năm" },
        { field: "Thu6", name: "Thứ sáu" },
        { field: "Thu7", name: "Thứ bảy" },
    ];

    const timetableItems = [
        { 'TietHoc': 1, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 2, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 3, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 4, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 5, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 6, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 7, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 8, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 9, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 10, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 11, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
        { 'TietHoc': 12, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    ];

    // Dữ liệu Sự kiện
    const eventColumns = [
        { field: "eventName", name: "Tên sự kiện/hoạt động" },
        { field: "organizer", name: "Đơn vị tổ chức" },
        { field: "eventTime", name: "Thời gian diễn ra" },
        { field: "email", name: "Email" }
    ];

    const eventItems = [
        { 'eventName': 'Hội thảo lập trình', 'organizer': 'Công ty XYZ', 'eventTime': '10:00 AM, 12/12/2024', 'email': 'contact@xyz.com' },
        { 'eventName': 'Chương trình đào tạo', 'organizer': 'Trường ĐH ABC', 'eventTime': '9:00 AM, 15/12/2024', 'email': 'info@abc.edu.vn' },
    ];

    // Dữ liệu Lớp chủ nhiệm
    const className = '10A1';
    const room = ' D3-301';
    const totalStudents = 40;
    const presentStudents = 30;
    const totalAbsent = 10;
    const permittedAbsence = 5;  // Vắng mặt có phép
    const unpermittedAbsence = 5;  // Vắng mặt không phép

    // Chart data cho donut
    const attendanceChartData = {
        labels: ['Có mặt', 'Vắng mặt'],
        datasets: [
            {
                data: [presentStudents, totalAbsent],
                backgroundColor: ['#FF9900', '#EEEEEE'],
                hoverBackgroundColor: ['#FF9900', '#EEEEEE']
            }
        ]
    };

    // Chart options để chỉ hiển thị tỉ lệ phần trăm có mặt và đặt vào chính giữa vòng tròn
    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                display: true,
                color: '#000000', // Màu chữ chính
                font: {
                    size: 20,  // Kích thước chữ
                    weight: 'bold'  // Đậm chữ
                },
                formatter: (value, context) => {
                    const total = presentStudents + totalAbsent;
                    const percentage = Math.round((value / total) * 100);

                    // Display percentage in center of donut
                    if (context.dataIndex === 0) {  // "Có mặt"
                        return ` `; // Hiển thị tỉ lệ phần trăm cho "Có mặt"
                    }
                    return ``; // Hiển thị tỉ lệ phần trăm cho "Vắng mặt"
                },
                color: (context) => {
                    // Điều chỉnh màu sắc dựa trên phần tử
                    if (context.dataIndex === 0) {
                        return '#FF9900';  // Màu cam cho "Có mặt"
                    }
                    return '#FFFFFF';  // Màu trắng cho "Vắng mặt"
                }
            }
        },
        cutout: '70%'  // Tạo hình donut (cắt giữa vòng tròn)
    };

    // Hàm để render chấm tròn theo trạng thái
    const renderStatusCircle = (status) => {
        let color;
        if (status === 'Vắng mặt') {
            color = 'red';  // Chấm tròn đỏ cho "Vắng mặt"
        } else if (status === 'Có phép') {
            color = 'yellow';  // Chấm tròn vàng cho "Có phép"
        } else if (status === 'Không phép') {
            color = 'gray';  // Chấm tròn xám cho "Không phép"
        }
        return (
            <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: color,
                marginRight: '5px'
            }} />
        );
    };

    return (
        <EuiPageTemplate
        style={{
            width: '100vw',   // Full width
            height: '100vh',  // Full height
            margin: 0,        // Remove margin
            padding: 0,       // Remove padding
            overflow: 'auto', // Allow scrolling if content overflows
        }}
    >
        {/* Header */}
        <EuiPageTemplate.Header paddingSize="m">
            <EuiFlexItem grow={false}>
                <EuiText><h2>Trang chủ</h2></EuiText>
            </EuiFlexItem>
        </EuiPageTemplate.Header>

        {/* Nội dung Trang */}
        <EuiFlexGroup direction="column" style={{ padding: '20px' }}>
            {/* Thời khóa biểu */}
            <EuiPanel paddingSize="l" style={{ marginBottom: '20px' }}>
                <EuiText>
                    <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                        <EuiIcon type="calendar" size="m" style={{ marginRight: '8px' }} />
                        Thời khóa biểu
                    </h3>
                </EuiText>
                <EuiSpacer size="m" />
                <EuiBasicTable tableLayout="auto" columns={timetableColumns} items={timetableItems} />
            </EuiPanel>


            {/* Lớp chủ nhiệm */}
            <EuiPageTemplate color="#FFFFFF">
    <EuiFlexGroup gutterSize="l" direction="row" style={{ width: '100%', margin: 0, padding: 0 }}>
        {/* Panel Sự kiện */}
        <EuiFlexItem style={{ flex: '0 0 70%', height: '500px' }}>
            <EuiPanel paddingSize="l" style={{ height: '100%', padding: 10 }}>
                <EuiText>
                    <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                        <EuiIcon type="bell" size="m" style={{ marginRight: '8px' }} />
                        Sự kiện
                    </h3>
                </EuiText>
                <EuiSpacer size="m" />
                <EuiBasicTable tableLayout="auto" columns={eventColumns} items={eventItems} />
            </EuiPanel>
        </EuiFlexItem>

        {/* Panel Lớp chủ nhiệm - Đã thay đổi kích thước và đặt bên phải */}
        <EuiFlexItem style={{ flex: '0 0 30%', height: '500px' }}>
            <EuiPanel paddingSize="l" style={{ height: '100%', padding: 10 }}>
                <EuiText>
                    <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                        <EuiIcon type="user" size="m" style={{ marginRight: '8px' }} />
                        Lớp chủ nhiệm
                    </h3>
                </EuiText>
                <EuiSpacer size="m" />

                {/* Hàng đầu tiên: Tên lớp, phòng học, số học sinh */}
                <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" style={{ margin: 0, padding: 0 }}>
                    <EuiFlexItem>
                        <EuiText style={{ fontSize: '16px' }}>
                            Tên lớp:
                        </EuiText>
                        <EuiText style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {className}
                        </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiText style={{ fontSize: '16px' }}>
                            Phòng học cố định:
                        </EuiText>
                        <EuiText style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {room}
                        </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiText style={{ fontSize: '16px' }}>
                            Học sinh:
                        </EuiText>
                        <EuiText style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {totalStudents}
                        </EuiText>
                    </EuiFlexItem>
                </EuiFlexGroup>

                {/* Mục điểm danh nằm bên phải donut */}
                <EuiSpacer size="m" />
                <EuiFlexGroup justifyContent="spaceBetween" gutterSize="m" style={{ margin: 0, padding: 0 }}>
                    {/* Vòng tròn donut cho điểm danh */}
                    <EuiFlexItem style={{ maxWidth: '150px', maxHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Doughnut data={attendanceChartData} options={options} height={120} width={120} />
                    </EuiFlexItem>

                    {/* Mục điểm danh nằm trên một cột */}
                    <EuiFlexItem style={{ width: '100%' }}>
                        <EuiText style={{ fontSize: '16px' }}>
                            Điểm danh
                        </EuiText>
                        <EuiSpacer size="m" />
                        <EuiText style={{ fontSize: '14px' }}>
                            {renderStatusCircle('Vắng mặt')} Vắng mặt: {totalAbsent}
                        </EuiText>
                        <EuiText style={{ fontSize: '14px' }}>
                            {renderStatusCircle('Có phép')} Có phép: {permittedAbsence}
                        </EuiText>
                        <EuiText style={{ fontSize: '14px' }}>
                            {renderStatusCircle('Không phép')} Không phép: {unpermittedAbsence}
                        </EuiText>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPanel>
        </EuiFlexItem>
    </EuiFlexGroup>
</EuiPageTemplate>
 </EuiFlexGroup>
 </EuiPageTemplate>
    );
}
