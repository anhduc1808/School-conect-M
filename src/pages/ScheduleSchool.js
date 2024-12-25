import React from 'react';
import {
  EuiPageTemplate,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiTable,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableBody,
  EuiTableRow,
  EuiTableRowCell,
  EuiPanel,
  EuiText,
} from '@elastic/eui';

const ScheduleSchool = () => {
  // Dữ liệu mẫu cho dropdown
  const blocks = [
    { value: '10', text: 'Khối 10' },
    { value: '11', text: 'Khối 11' },
    { value: '12', text: 'Khối 12' },
  ];

  const timeShifts = [
    { value: 'morning', text: 'Buổi sáng' },
    { value: 'afternoon', text: 'Buổi chiều' },
  ];

  // Dữ liệu mẫu cho bảng
  const scheduleData = [
    {
      className: '10A1 - Tuyến',
      periods: ['Chào cờ', 'Toán học - Tuyến', 'Toán học - Tuyến', 'Ngữ Văn', 'Lịch Sử'],
    },
    {
      className: '10A2 - Tuyến',
      periods: ['Chào cờ', 'Toán học - Tuyến', 'Toán học - Tuyến', 'Ngữ Văn', 'Lịch Sử'],
    },
    {
      className: '10A3 - Tuyến',
      periods: ['Chào cờ', 'Toán học - Tuyến', 'Toán học - Tuyến', 'Ngữ Văn', 'Lịch Sử'],
    },
    // Thêm các lớp khác
  ];

  return (
    <EuiPageTemplate pageHeader={{ pageTitle: 'Thời khoá biểu' }}>
      <EuiPanel paddingSize="l">
        {/* Thanh lọc */}
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="m">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="m">
              <EuiFlexItem>
                <EuiSelect options={blocks} aria-label="Chọn khối" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiSelect options={timeShifts} aria-label="Chọn buổi" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="m">
              <EuiFlexItem>
                <EuiButton fill>Thời khoá biểu của tôi</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="primary">Tạo mới thời khoá biểu</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        {/* Thông tin học kỳ */}
        <EuiText textAlign="right" size="s" style={{ marginTop: '10px' }}>
          <p>Học kỳ: I - Năm học: 2024-2025</p>
        </EuiText>

        {/* Bảng thời khoá biểu */}
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
          <EuiTable>
            <EuiTableHeader>
              <EuiTableHeaderCell>Thứ</EuiTableHeaderCell>
              <EuiTableHeaderCell>Tiết</EuiTableHeaderCell>
              {scheduleData.map((classData, index) => (
                <EuiTableHeaderCell key={index}>{classData.className}</EuiTableHeaderCell>
              ))}
            </EuiTableHeader>

            <EuiTableBody>
              {[2].map((day) => (
                [1, 2, 3, 4, 5].map((period) => (
                  <EuiTableRow key={`${day}-${period}`}>
                    <EuiTableRowCell>{day}</EuiTableRowCell>
                    <EuiTableRowCell>{period}</EuiTableRowCell>
                    {scheduleData.map((classData, index) => (
                      <EuiTableRowCell key={index}>{classData.periods[period - 1]}</EuiTableRowCell>
                    ))}
                  </EuiTableRow>
                ))
              ))}
            </EuiTableBody>
          </EuiTable>
        </div>
      </EuiPanel>
    </EuiPageTemplate>
  );
};

export default ScheduleSchool;
