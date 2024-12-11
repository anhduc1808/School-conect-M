import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem, EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup } from '@elastic/eui';


export default function SideBar() {
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
        <EuiListGroupItem label="Trang chủ" style={{ fontWeight: 'bold' }} />
      </EuiListGroup>

      {/* Hoạt động - chia thành các mục nhỏ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label="Hoạt động" style={{ fontWeight: 'bold' }} />
        
        {/* Mục Thông tin */}
        <EuiListGroupItem label={<><EuiIcon type="bell" size="m" /> Thông tin</>} />
        
        {/* Mục Sự kiện */}
        <EuiListGroupItem label={<><EuiIcon type="starFilled" size="m" /> Sự kiện</>} />
        
        {/* Mục Thông báo */}
        <EuiListGroupItem label={<><EuiIcon type="article" size="m" /> Thông báo</>} />
      </EuiListGroup>

      {/* Quản lý học tập */}
      <EuiCollapsibleNavGroup 
        isCollapsible 
        initialIsOpen={true} 
        title={<EuiText style={{ fontWeight: 'bold' }}>Học tập</EuiText>} 
        style={{ borderBlockStart: 'none' }}
      >
        <EuiListGroup flush gutterSize="none">
          <EuiListGroupItem label={<><EuiIcon type="calendar" size="m" /> Thời khóa biểu</>} />
          <EuiListGroupItem label={<><EuiIcon type="users" size="m" /> Lớp học của tôi</>} />
          <EuiListGroupItem label={<><EuiIcon type="reporter" size="m" /> Sổ liên lạc điện tử</>} />
          <EuiListGroupItem label={<><EuiIcon type="training" size="m" /> Học bạ học sinh</>} />
          <EuiListGroupItem label={<><EuiIcon type="starEmpty" size="m" /> Kết quả học tập</>} />
        </EuiListGroup>
      </EuiCollapsibleNavGroup>

      {/* Học phí */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label="Học phí" style={{ fontWeight: 'bold' }} />
      </EuiListGroup>
    </>
  );
}
