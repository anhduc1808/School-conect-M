import React, { useState } from "react";
import {
  EuiFieldSearch,
  EuiSelect,
  EuiDatePickerRange,
  EuiDatePicker,
  EuiButton,
  EuiTable,
  EuiTableBody,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiCheckbox,
  EuiPagination,
} from "@elastic/eui";
import moment from "moment";

const FeeTable = () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [activePage, setActivePage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = [
    { name: "Học phí", type: "Bắt buộc", time: "11/07/2020 01:44", amount: 10000000, date: "11/07/2024 → 12/07/2025", status: "Đã đóng" },
    { name: "Bảo hiểm y tế", type: "Bắt buộc", time: "11/07/2020 01:44", amount: 10000000, date: "11/07/2024 → 12/07/2025", status: "Badge" },
    { name: "Phí ăn trưa", type: "Tự chọn", time: "11/07/2020 01:44", amount: 10000000, date: "11/07/2024 → 12/07/2025", status: "Badge" },
    { name: "Phí vé xe Bus", type: "Tự chọn", time: "11/07/2020 01:44", amount: 10000000, date: "11/07/2024 → 12/07/2025", status: "Badge" },
  ];

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#f9f9f9",
      width: "100%",  // Mở rộng chiều ngang
      margin: 0,
    },
    title: {
      fontSize: "24px",  // Font-size như trước
      fontWeight: "bold",
      marginBottom: "20px",
    },
    controls: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      marginBottom: "20px",
      width: "100%",  // Mở rộng chiều ngang của control
    },
    tableContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      width: "100%",  // Mở rộng chiều ngang của bảng
      boxShadow: "none",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
    },
    total: {
      fontWeight: "bold",
    },
    badge: {
      backgroundColor: "#d3d3d3",
      padding: "8px 12px",
      borderRadius: "8px",
    },
    statusDone: {
      color: "green",
      fontWeight: "bold",
    },
    table: {
      borderCollapse: "collapse",
      width: "100%",  // Mở rộng chiều ngang bảng
    },
    tableCell: {
      padding: "10px",
      border: "none",  // Không có đường viền
    },
    tableHeader: {
      backgroundColor: "#f4f4f4",
      fontSize: "16px",  // Font-size như trước
    },
  };

  const startIndex = activePage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <div style={styles.container}>
      {/* Tiêu đề */}
      <div style={styles.title}>Học phí của tôi</div>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div style={styles.controls}>
        <EuiFieldSearch placeholder="Tìm kiếm theo tên chi phí ..." fullWidth style={{ flex: 2 }} />
        <EuiSelect
          options={[
            { value: "all", text: "Phân loại" },
            { value: "mandatory", text: "Bắt buộc" },
            { value: "optional", text: "Tự chọn" },
          ]}
          style={{ flex: 1 }}
        />
        <EuiDatePickerRange
          startDateControl={
            <EuiDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
            />
          }
          endDateControl={
            <EuiDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              startDate={startDate}
              endDate={endDate}
            />
          }
        />
        <EuiSelect
          options={[
            { value: "semester1", text: "Học kỳ: I" },
            { value: "semester2", text: "Học kỳ: II" },
          ]}
          style={{ flex: 1 }}
        />
        <EuiSelect
          options={[
            { value: "2024-2025", text: "Năm học: 2024-2025" },
            { value: "2023-2024", text: "Năm học: 2023-2024" },
          ]}
          style={{ flex: 1 }}
        />
      </div>

      {/* Bảng dữ liệu */}
      <div style={styles.tableContainer}>
        <EuiTable style={styles.table}>
          <EuiTableHeader style={styles.tableHeader}>
            <EuiTableHeaderCell style={styles.tableCell} />
            <EuiTableHeaderCell style={styles.tableCell}>Tên chi phí</EuiTableHeaderCell>
            <EuiTableHeaderCell style={styles.tableCell}>Phân loại</EuiTableHeaderCell>
            <EuiTableHeaderCell style={styles.tableCell}>Thời gian bắt đầu</EuiTableHeaderCell>
            <EuiTableHeaderCell style={{ ...styles.tableCell, textAlign: "right" }}>Số tiền (VND)</EuiTableHeaderCell>
            <EuiTableHeaderCell style={{ ...styles.tableCell, textAlign: "center" }}>Từ ngày - Đến ngày</EuiTableHeaderCell>
            <EuiTableHeaderCell style={{ ...styles.tableCell, textAlign: "center" }}>Trạng thái</EuiTableHeaderCell>
          </EuiTableHeader>

          <EuiTableBody>
            {currentPageData.map((item, index) => (
              <EuiTableRow key={index}>
                <EuiTableRowCell style={styles.tableCell}>
                  <EuiCheckbox id={`checkbox_${index}`} />
                </EuiTableRowCell>
                <EuiTableRowCell style={styles.tableCell}>{item.name}</EuiTableRowCell>
                <EuiTableRowCell style={styles.tableCell}>{item.type}</EuiTableRowCell>
                <EuiTableRowCell style={styles.tableCell}>{item.time}</EuiTableRowCell>
                <EuiTableRowCell style={{ ...styles.tableCell, textAlign: "right" }}>
                  {item.amount.toLocaleString()}
                </EuiTableRowCell>
                <EuiTableRowCell style={{ ...styles.tableCell, textAlign: "center" }}>
                  {item.date}
                </EuiTableRowCell>
                <EuiTableRowCell style={{ ...styles.tableCell, textAlign: "center" }}>
                  {item.status === "Đã đóng" ? (
                    <span style={styles.statusDone}>● {item.status}</span>
                  ) : (
                    <span style={styles.badge}>{item.status}</span>
                  )}
                </EuiTableRowCell>
              </EuiTableRow>
            ))}
            <EuiTableRow>
              <EuiTableRowCell colSpan={6} />
              <EuiTableRowCell style={{ ...styles.tableCell, textAlign: "right", fontWeight: "bold" }}>
                Tổng chi phí:
              </EuiTableRowCell>
              <EuiTableRowCell style={{ ...styles.tableCell, textAlign: "right", fontWeight: "bold" }}>
                {totalAmount.toLocaleString()} VND
              </EuiTableRowCell>
            </EuiTableRow>
          </EuiTableBody>
        </EuiTable>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        {/* Rows per page ở góc trái */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <label style={{ fontSize: "16px" }}>Rows per page:</label>
          <EuiSelect
            options={[
              { value: 5, text: "5" },
              { value: 10, text: "10" },
              { value: 15, text: "15" },
              { value: 20, text: "20" },
            ]}
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            style={{ width: "100px", textAlign: "center" }}
          />
        </div>

        {/* Pagination và Lưu ở góc phải */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <EuiPagination
            pageCount={Math.ceil(data.length / rowsPerPage)}
            activePage={activePage}
            onPageClick={(page) => setActivePage(page)}
          />
          <EuiButton fill style={{ fontSize: "16px" }}>Lưu</EuiButton>
        </div>
      </div>
    </div>
  );
};

export default FeeTable;
