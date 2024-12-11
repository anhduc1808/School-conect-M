import React from 'react';
import { EuiAvatar, EuiFieldSearch, EuiFlexGroup, EuiHeader, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiText } from '@elastic/eui';
import logo from '../assets/logo.png'; // Import the logo image

export default function Header() {
  return (
    <EuiHeader style={{ width: '100%' }}>
      <EuiHeaderSection style={{ gap: 20 }}>
        <EuiHeaderSectionItem>
          <EuiHeaderLogo iconType="menu" />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          {/* Thử thay thế bằng thẻ <img> */}
          <img src={require('../assets/logo.png')} alt="Logo" width="100px" height="25px" />
          </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiFieldSearch placeholder="Search" style={{ borderRadius: "24px", width: '400px' }} />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiFlexGroup gutterSize="s">
          <EuiHeaderSectionItem>
            <EuiHeaderSectionItemButton notification={'2'}>
              <EuiIcon type="editorComment" size="l" />
            </EuiHeaderSectionItemButton>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderSectionItemButton notification={'2'}>
              <EuiIcon type="bell" size="m" />
            </EuiHeaderSectionItemButton>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderSectionItemButton>
              <EuiFlexGroup alignItems="center" gutterSize="m">
                <EuiAvatar name="John Username" imageUrl='/assets/avata.png' size="m" />
                <EuiText textAlign="left" size="s">
                  <strong>Lê chí tuyền</strong>
                  <p>Học sinh</p>
                </EuiText>
                <EuiIcon type="arrowDown" style={{ padding: '4px', border: '1px solid', borderRadius: '50%' }} />
              </EuiFlexGroup>
            </EuiHeaderSectionItemButton>
          </EuiHeaderSectionItem>
        </EuiFlexGroup>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
