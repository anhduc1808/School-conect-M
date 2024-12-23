import React, { useState } from 'react';
import { EuiFieldSearch, EuiSelect, EuiTable, EuiTableHeader, EuiTableHeaderCell, EuiTableBody, EuiTableRow, EuiTableRowCell, EuiText, EuiSpacer, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiPagination, EuiButton } from '@elastic/eui';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation

const TeachingClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rowsPerPageOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
  ];

  const classes = [
    { name: '10A1', teacher: 'Lê Chí Tuyến', email: 'bachkhoa@gmail.com', phone: '0112113114', room: 'Lê Chí Tuyến', students: 40 },
    { name: '10A2', teacher: 'Lê Chí Tuyến', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A3', teacher: 'Tuyền Chí Lê', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A4', teacher: 'Ngọc Chí Lê', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A5', teacher: 'Nguyễn Thị Thanh', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A6', teacher: 'Thanh Thị Nguyễn', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A7', teacher: 'Lê Chí Tuyến', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A8', teacher: 'Tuyền Chí Lê', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A9', teacher: 'Chí Lê Tuyến', email: '', phone: '10', room: '10', students: 10 },
    { name: '10A10', teacher: 'Tuyền Lê Chí', email: '', phone: '10', room: '10', students: 10 },
  ];

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterGrade === '' || filterGrade === 'tất cả' || cls.name.startsWith(filterGrade))
  );

  const paginatedClasses = filteredClasses.slice(
    pageIndex * rowsPerPage,
    (pageIndex + 1) * rowsPerPage
  );

  const navigate = useNavigate(); // Use useNavigate for navigation

  return (
    <EuiPanel style={{ padding: '20px', minHeight: '90vh' }}>
      <EuiFlexGroup alignItems="center" gutterSize="m">
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => navigate('/teacher')}
            iconType="arrowLeft"
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              backgroundColor: '#0070cc', // Lighter blue color
              color: 'white', // White text color
              border: 'none', // Optional: Remove border for a clean look
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText><h1>Lớp giảng dạy</h1></EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />
      
      {/* FlexGroup for the search and select fields */}
      <EuiFlexGroup alignItems="center" gutterSize="s"> {/* Use "s" to reduce space */}
        <EuiFlexItem grow={false} style={{ minWidth: '300px' }}>
          <EuiFieldSearch
            placeholder="Tìm kiếm theo tên lớp"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            isClearable
          />
        </EuiFlexItem>
        
        {/* The select input will be right next to the search input */}
        <EuiFlexItem grow={false} style={{ minWidth: '150px' }}>
          <EuiSelect
            options={[
              { value: '', text: 'Khối lớp' },
              { value: 'tất cả', text: 'Tất cả' },
              { value: '10', text: '10' },
              { value: '11', text: '11' },
              { value: '12', text: '12' }
            ]}
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />
      <EuiText><strong>Tổng số lớp phụ trách: {filteredClasses.length}</strong></EuiText>
      <EuiSpacer size="m" />
      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <EuiTable>
          <EuiTableHeader>
            <EuiTableHeaderCell>Lớp</EuiTableHeaderCell>
            <EuiTableHeaderCell>Giáo viên chủ nhiệm</EuiTableHeaderCell>
            <EuiTableHeaderCell>Email</EuiTableHeaderCell>
            <EuiTableHeaderCell>Số điện thoại</EuiTableHeaderCell>
            <EuiTableHeaderCell>Phòng học cố định</EuiTableHeaderCell>
            <EuiTableHeaderCell>Số học sinh</EuiTableHeaderCell>
          </EuiTableHeader>
          <EuiTableBody>
            {paginatedClasses.map((cls, index) => (
              <EuiTableRow key={index}>
                <EuiTableRowCell>{cls.name}</EuiTableRowCell>
                <EuiTableRowCell>{cls.teacher}</EuiTableRowCell>
                <EuiTableRowCell>{cls.email || '-'}</EuiTableRowCell>
                <EuiTableRowCell>{cls.phone}</EuiTableRowCell>
                <EuiTableRowCell>{cls.room}</EuiTableRowCell>
                <EuiTableRowCell>{cls.students}</EuiTableRowCell>
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
      </div>
      <EuiSpacer size="m" />
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiSelect
            options={rowsPerPageOptions.map((opt) => ({ value: opt.value, text: opt.label }))}
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPageIndex(0); // Reset to the first page when rows per page changes
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPagination
            pageCount={Math.ceil(filteredClasses.length / rowsPerPage)}
            activePage={pageIndex}
            onPageClick={(page) => setPageIndex(page)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default TeachingClasses;
