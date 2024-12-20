import React, { useState } from 'react';
import {
  EuiPageHeader,
  EuiPageHeaderContent,
  EuiAvatar,
  EuiBadge,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiHeader,
  EuiHeaderAlert,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiImage,
  EuiPopover,
  EuiPortal,
  EuiText,
  EuiTitle,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
} from '@elastic/eui';

export default function Headerteacher({ clickSideBarteacher }) {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [popoverUser, setPopoverUser] = useState(false);
  const [popoverApp, setPopoverApp] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Danh sách thông báo
  const alerts = [
    { title: 'Thông báo học tập', text: 'Nộp bài tập đúng hạn.', type: 'học tập', date: '1 May 2024' },
    { title: 'Sự kiện sắp diễn ra', text: 'Tham gia hội thảo công nghệ.', type: 'sự kiện', date: '3 May 2024' },
    { title: 'Cuộc họp đội nhóm', text: 'Cuộc họp ngày thứ 6.', type: 'cuộc họp', date: '5 May 2024' },
    { title: 'Kỳ thi học kỳ', text: 'Chuẩn bị cho kỳ thi cuối kỳ.', type: 'học tập', date: '8 May 2024' },
  ];

  const closeFlyout = () => setIsFlyoutVisible(false);
  const showFlyout = () => setIsFlyoutVisible(!isFlyoutVisible);

  const openPopoverUser = () => setPopoverUser(!popoverUser);
  const closePopoverUser = () => setPopoverUser(false);

  const openPopoverApp = () => setPopoverApp(!popoverApp);
  const closePopoverApp = () => setPopoverApp(false);

  // Flyout thông báo
  const flyout = (
    <EuiPortal>
      <EuiFlyout onClose={closeFlyout} size="s">
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="s">
            <h2>Thông báo</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiFlexGroup justifyContent="spaceAround" gutterSize="s">
            {['Tất cả', 'Học tập', 'Sự kiện', 'Cuộc họp'].map((tab, index) => (
              <EuiFlexItem key={index} grow={false}>
                <EuiButtonEmpty
                  color={activeTab === tab.toLowerCase() ? 'primary' : 'text'}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </EuiButtonEmpty>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>

          {/* Kiểm tra lại thông báo */}
          {console.log(activeTab)} 
          {alerts
            .filter((alert) => activeTab === 'all' || alert.type === activeTab)
            .map((alert, i) => (
              <EuiHeaderAlert
                key={`alert-${i}`}
                title={alert.title}
                text={alert.text}
                date={alert.date}
                badge={<EuiBadge color={alert.type === 'học tập' ? 'success' : alert.type === 'sự kiện' ? 'warning' : 'default'}>{alert.type}</EuiBadge>}
              />
            ))}
        </EuiFlyoutBody>
      </EuiFlyout>
    </EuiPortal>
  );

  return (
    <EuiPageHeader>
      <EuiPageHeaderContent>
        <EuiHeader style={{ width: '100%' }}>
          <EuiHeaderSection>
            <EuiHeaderSectionItem>
              <EuiButtonEmpty onClick={clickSideBarteacher} iconType="menu" color="text" />
              <EuiImage src={require('../assets/logo.png')} width="100px" height="25px" />
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
              <EuiAvatar name="S" type="space" size="s" color="#68C4A2" />
            </EuiHeaderSectionItem>
            <EuiHeaderBreadcrumbs
              max={2}
              breadcrumbs={[
                {text:"Analytics",href:"#"},
                {text:"Analytics",href:"#"},
                {text:"Analytics",href:"#"},
                {text:"Analytics",href:"#"},
                {text:"Analytics",href:"#"},
                {text:"Web logs"},
              ]}
            />
          </EuiHeaderSection>
          <EuiHeaderSection side="right">
            <EuiFlexGroup gutterSize="xs">
              <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton onClick={showFlyout} notification={'4'}>
                  <EuiIcon type="bell" size="m" />
                </EuiHeaderSectionItemButton>
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton onClick={() => alert('Bạn có email mới!')} notification={'2'}>
                  <EuiIcon type="email" size="m" />
                </EuiHeaderSectionItemButton>
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem>
                <EuiPopover
                  panelStyle={{ outline: 'none' }}
                  isOpen={popoverUser}
                  closePopover={closePopoverUser}
                  button={
                    <EuiHeaderSectionItemButton onClick={openPopoverUser}>
                      <EuiAvatar name="EL" color="#68C4A2" size="s" />
                    </EuiHeaderSectionItemButton>
                  }
                >
                  <EuiFlexGroup gutterSize="s" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiAvatar name="DN" imageUrl="/assets/avata.png" size="xl" />
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiText>Duc Nguyen</EuiText>
                      <EuiFlexGroup>
                        <EuiButtonEmpty>Chỉnh sửa hồ sơ</EuiButtonEmpty>
                        <EuiButtonEmpty>Đăng xuất</EuiButtonEmpty>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiPopover>
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem>
                <EuiPopover
                  panelStyle={{ width: '288px' }}
                  isOpen={popoverApp}
                  closePopover={closePopoverApp}
                  button={
                    <EuiHeaderSectionItemButton onClick={openPopoverApp}>
                      <EuiIcon type="apps" size="m" />
                    </EuiHeaderSectionItemButton>
                  }
                >
                  <EuiKeyPadMenu>
                    {['Dashboard', 'Canvas', 'Lens', 'Visualize', 'Graph', 'Advanced Settings'].map((item, index) => (
                      <EuiKeyPadMenuItem key={index} label={item}>
                        <EuiIcon type={`${item.toLowerCase()}App`} size="l" />
                      </EuiKeyPadMenuItem>
                    ))}
                  </EuiKeyPadMenu>
                </EuiPopover>
              </EuiHeaderSectionItem>
            </EuiFlexGroup>
          </EuiHeaderSection>
        </EuiHeader>
      </EuiPageHeaderContent>
      {isFlyoutVisible && flyout}
    </EuiPageHeader>
  );
}
