import React from 'react';
import {
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiTable,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableBody,
  EuiTableRow,
  EuiTableRowCell,
  EuiSelect,
} from '@elastic/eui';
import { useNavigate } from 'react-router-dom';

const MySchedule = () => {
  const navigate = useNavigate();

  const daysOfWeek = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu'];
  const scheduleData = [
    ['Chào cờ', 'Toán', 'Ngữ Văn', 'Vật Lý', 'Tiếng Anh'],
    ['Online', 'Online', 'Online', 'Online', '12A3'],
    ['Online', 'Online', 'Online', 'Online', '12A3'],
    ['Online', 'Online', 'Online', 'Online', '12A3'],
    ['Online', 'Online', 'Online', 'Online', '12A3'],
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        width: '100%',
        maxWidth: 'none', // Loại bỏ giới hạn chiều rộng
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <section style={{ padding: '20px', margin: '0', width: '100%' }}>
        <EuiFlexGroup
          alignItems="center"
          gutterSize="m"
          justifyContent="flexStart"
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <EuiFlexItem grow={false}>
            <EuiButton
              onClick={() => navigate(-1)}
              iconType="arrowLeft"
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: '#0070cc',
                color: 'white',
              }}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText>
              <h1>Thời khoá biểu của tôi</h1>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </section>

      {/* Options Section */}
      <section style={{ padding: '0 20px', margin: '0', width: '100%' }}>
        <EuiFlexGroup
          justifyContent="flexEnd"
          alignItems="center"
          gutterSize="s"
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <EuiFlexItem grow={false}>
            <EuiSelect
              options={[
                { value: '1', text: 'Học kỳ: I' },
                { value: '2', text: 'Học kỳ: II' },
              ]}
              style={{
                width: '150px',
                appearance: 'none',
                border: 'none',
                color: '#336699',
                padding: '5px',
                background: 'transparent',
                fontSize: '14px',
                borderRadius: '4px',
              }}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSelect
              options={[
                { value: '2024-2025', text: 'Năm học: 2024-2025' },
                { value: '2025-2026', text: 'Năm học: 2025-2026' },
              ]}
              style={{
                width: '180px',
                appearance: 'none',
                border: 'none',
                color: '#336699',
                padding: '5px',
                background: 'transparent',
                fontSize: '14px',
                borderRadius: '4px',
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </section>

      {/* Schedule Table Section */}
      <section style={{ padding: '20px 0', margin: '0', width: '100%' }}>
        <EuiTable style={{ width: '100%' }}>
          <EuiTableHeader>
            <EuiTableHeaderCell>Tiết học</EuiTableHeaderCell>
            {daysOfWeek.map((day, index) => (
              <EuiTableHeaderCell key={index}>{day}</EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {scheduleData.map((row, rowIndex) => (
              <EuiTableRow key={rowIndex}>
                <EuiTableRowCell>{rowIndex + 1}</EuiTableRowCell>
                {row.map((cell, cellIndex) => (
                  <EuiTableRowCell key={cellIndex}>{cell}</EuiTableRowCell>
                ))}
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
      </section>
    </section>
  );
};

export default MySchedule;
