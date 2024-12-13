import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem, EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup } from '@elastic/eui';
import { Link } from 'react-router-dom';  // Đảm bảo đã cài đặt react-router-dom

export default function SideBarteacher() {
  return (
    <>
      {/* Phần tiêu đề SCM */}
      <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false} style={{ padding: '4px 8px' }}>
        <EuiFlexItem grow={false} style={{ padding: '5px', border: '1px solid gray', borderRadius: '50%', boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
          <EuiIcon type="gear" />
        </EuiFlexItem>
        <EuiText><strong>SCM</strong></EuiText>
      </EuiFlexGroup>

      {/* Trang chủ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label={<Link to="/student">Trang chủ</Link>} style={{ fontWeight: 'bold' }} />
      </EuiListGroup>

      {/* Hoạt động - chia thành các mục nhỏ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label={<Link to="/activities">Hoạt động</Link>} style={{ fontWeight: 'bold' }} />
        
        {/* Mục Thông tin */}
        <EuiListGroupItem label={<><EuiIcon type="bell" size="m" /> <Link to="/notifications">Thông tin</Link></>} />
        
        {/* Mục Sự kiện */}
        <EuiListGroupItem label={<><EuiIcon type="starFilled" size="m" /> <Link to="/events">Sự kiện</Link></>} />
        
        {/* Mục Thông báo */}
        <EuiListGroupItem label={<><EuiIcon type="article" size="m" /> <Link to="/news">Thông báo</Link></>} />
      </EuiListGroup>

      {/* Quản lý học tập */}
      <EuiCollapsibleNavGroup 
        isCollapsible 
        initialIsOpen={true} 
        title={<EuiText style={{ fontWeight: 'bold' }}>Học tập</EuiText>} 
        style={{ borderBlockStart: 'none' }}
      >
        <EuiListGroup flush gutterSize="none">
          <EuiListGroupItem label={<><EuiIcon type="calendar" size="m" /> <Link to="/schedule">Thời khóa biểu</Link></>} />
          <EuiListGroupItem label={<><EuiIcon type="users" size="m" /> <Link to="/my-classes">Lớp giảng dạy</Link></>} />
          <EuiListGroupItem label={<><EuiIcon type="training" size="m" /> <Link to="/contact-book">Lớp chủ nhiệm</Link></>} />\
        </EuiListGroup>
      </EuiCollapsibleNavGroup>

      {/* Học phí */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label={<Link to="/tuition">Cài đặt</Link>} style={{ fontWeight: 'bold' }} />
      </EuiListGroup>
    </>
  );
}
