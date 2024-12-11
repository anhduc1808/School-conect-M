import React from 'react';
import {
    EuiPageTemplate,
    EuiText,
    EuiBasicTable,
    EuiSpacer,
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiStat
} from '@elastic/eui';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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
    const room = ' 101';
    const totalStudents = 40;
    const presentStudents = 38;
    const totalAbsent = 10;
    const permittedAbsence = 5;  // Vắng mặt có phép
    const unpermittedAbsence = 5;  // Vắng mặt không phép

    // Dữ liệu Điểm danh
    const attendanceStats = {
        present: presentStudents,
        absent: totalAbsent,
        permittedAbsence,
        unpermittedAbsence
    };

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

    return (
        <EuiPageTemplate>
            {/* Header */}
            <EuiPageTemplate.Header 
                paddingSize="m" 
                pageTitle={<EuiText><h2>Bảng điều khiển giáo viên</h2></EuiText>} 
            />

            {/* Thời khóa biểu */}
            <EuiPageTemplate.Section color="plain">
                <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="l">
                    <EuiFlexItem grow={false}>
                        <EuiText>
                            <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                                <EuiIcon type="calendar" size="m" style={{ marginRight: '8px' }} />
                                Thời khóa biểu
                            </h3>
                        </EuiText>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="m" />
                <EuiBasicTable tableLayout="auto" columns={timetableColumns} items={timetableItems} />
            </EuiPageTemplate.Section>

            {/* Lớp chủ nhiệm và Sự kiện */}
            <EuiPageTemplate.Section color="plain">
                <EuiFlexGroup gutterSize="l" direction="row">
                    {/* Panel Sự kiện */}
                    <EuiFlexItem style={{ width: '1000px', height: '282px' }}>
                        <EuiPanel paddingSize="l" style={{ height: '100%' }}>
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

                    {/* Panel Lớp chủ nhiệm */}
                    <EuiFlexItem style={{ width: '300px', height: '282px' }}>
                        <EuiPanel paddingSize="l" style={{ height: '100%' }}>
                            <EuiText>
                                <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>
                                    <EuiIcon type="user" size="m" style={{ marginRight: '8px' }} />
                                    Lớp chủ nhiệm
                                </h3>
                            </EuiText>
                            <EuiSpacer size="m" />

                            {/* Hàng đầu tiên: Tên lớp, phòng học, số học sinh */}
                            <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
                                <EuiFlexItem>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                        Tên lớp:
                                    </EuiText>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '24px' }}>
                                        {className}
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                        Phòng học:
                                    </EuiText>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '24px' }}>
                                        {room}
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                        Số học sinh:
                                    </EuiText>
                                    <EuiText style={{ fontWeight: 'bold', fontSize: '24px' }}>
                                        {totalStudents}
                                    </EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>

                            {/* Mục điểm danh nằm bên phải donut */}
                            <EuiSpacer size="m" />
                            <EuiFlexGroup justifyContent="spaceBetween" gutterSize="m">
                                {/* Vòng tròn donut cho điểm danh */}
                                <EuiFlexItem style={{ maxWidth: '150px', maxHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Doughnut data={attendanceChartData} height={120} width={120} />
                                </EuiFlexItem>

                                {/* Mục điểm danh nằm trên một cột */}
                                <EuiFlexItem style={{ width: '100%' }}>
                                    <EuiText style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                        Điểm danh
                                    </EuiText>
                                    <EuiSpacer size="m" />
                                    <EuiText style={{ fontSize: '16px' }}>
                                        <strong>Vắng mặt:</strong> {totalAbsent}
                                    </EuiText>
                                    <EuiText style={{ fontSize: '16px' }}>
                                        <strong>Có phép:</strong> {permittedAbsence}
                                    </EuiText>
                                    <EuiText style={{ fontSize: '16px' }}>
                                        <strong>Không phép:</strong> {unpermittedAbsence}
                                    </EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageTemplate.Section>
        </EuiPageTemplate>
    );
}
