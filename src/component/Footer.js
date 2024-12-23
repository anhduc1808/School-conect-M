import { EuiFlexGroup, EuiLink, EuiText } from '@elastic/eui';
import React from 'react';

export default function Footer() {
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      padding: '10px 0', 
      backgroundColor: 'black', 
      color: 'white', 
      width: '100%', 
      zIndex: 1000 
    }}>
      <EuiFlexGroup alignItems='center' justifyContent='spaceBetween' gutterSize='none' style={{ padding: '0 20px' }}>
        <EuiText size='xs' style={{ color: 'white' }}>School Connected M - Hệ thống quản lý trường học</EuiText>
        <EuiLink><EuiText size='xs' style={{ color: 'white' }}>info@ecotel.com.vn</EuiText></EuiLink>
      </EuiFlexGroup>
    </div>
  );
}
