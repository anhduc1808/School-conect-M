import { EuiAvatar, EuiBadge, EuiButton, EuiButtonEmpty, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutFooter, EuiFlyoutHeader, EuiHeader, EuiHeaderAlert, EuiHeaderBreadcrumbs, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiKeyPadMenu, EuiKeyPadMenuItem, EuiLink, EuiPageHeader, EuiPageHeaderContent, EuiPopover, EuiPopoverTitle, EuiPortal, EuiText, EuiTitle } from '@elastic/eui'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
export default function Headers({clickSideBar}) {
    const [popoverUser,setPopoverUser]=useState(false)
    const [popoverApp,setPopoverApp]=useState(false)
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

    const alerts = [
        {
          title: 'Control access to features',
          text: 'Show or hide applications and features per space in Kibana.',
          action: <EuiLink href="">Learn about feature controls</EuiLink>,
          date: '1 May 2019',
          badge: <EuiBadge>7.1</EuiBadge>,
        },
        {
          title: 'Kibana 7.0 is turning heads',
          text: 'Simplified navigation, responsive dashboards, dark mode… pick your favorite.',
          action: (
            <EuiLink
              target="_blank"
              external
              href="https://www.elastic.co/blog/kibana-7-0-0-released"
            >
              Read the blog
            </EuiLink>
          ),
          date: '10 April 2019',
          badge: <EuiBadge color="hollow">7.0</EuiBadge>,
        },
        {
          title: 'Enter dark mode',
          text: 'Kibana now supports the easy-on-the-eyes theme across the entire UI.',
          action: <EuiLink href="">Go to Advanced Settings</EuiLink>,
          date: '10 April 2019',
          badge: <EuiBadge color="hollow">7.0</EuiBadge>,
        },
        {
          title: 'Pixel-perfect Canvas is production ready',
          text: 'Your creative space for visualizing data awaits.',
          action: (
            <EuiLink
              target="_blank"
              external
              href="https://www.elastic.co/webinars/intro-to-canvas-a-new-way-to-tell-visual-stories-in-kibana"
            >
              Watch the webinar
            </EuiLink>
          ),
          date: '26 March 2019',
          badge: <EuiBadge color="hollow">6.7</EuiBadge>,
        },
        {
          title: '6.7 release notes',
          text: 'Stay up-to-date on the latest and greatest features.',
          action: (
            <EuiLink
              target="_blank"
              external
              href="https://www.elastic.co/guide/en/kibana/6.7/release-notes-6.7.0.html"
            >
              Check out the docs
            </EuiLink>
          ),
          date: '26 March 2019',
          badge: <EuiBadge color="hollow">6.7</EuiBadge>,
        },
        {
          title: 'Rollups made simple in Kibana',
          text: 'Save space and preserve the integrity of your data directly in the UI.',
          action: (
            <EuiLink
              target="_blank"
              external
              href="https://www.elastic.co/blog/how-to-create-manage-and-visualize-elasticsearch-rollup-data-in-kibana"
            >
              Read the blog
            </EuiLink>
          ),
          date: '10 January 2019',
          badge: <EuiBadge color="hollow">6.5</EuiBadge>,
        },
      ];
    
      const closeFlyout = () => {
        setIsFlyoutVisible(false);
      };
      const showFlyout = () => {
        setIsFlyoutVisible(!isFlyoutVisible);
      };
      const flyout = (
        <EuiPortal>
          <EuiFlyout
            onClose={closeFlyout}
            size="s"
          >
            <EuiFlyoutHeader hasBorder>
              <EuiTitle size="s">
                <h2 >What&apos;s new</h2>
              </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
              {alerts.map((alert, i) => (
                <EuiHeaderAlert
                  key={`alert-${i}`}
                  title={alert.title}
                  action={alert.action}
                  text={alert.text}
                  date={alert.date}
                  badge={alert.badge}
                />
              ))}
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
              <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    iconType="cross"
                    onClick={closeFlyout}
                    flush="left"
                  >
                    Close
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiText color="subdued" size="s">
                    <p>Version 7.0</p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlyoutFooter>
          </EuiFlyout>
        </EuiPortal>
      );

    const openPopoverUser=()=>setPopoverUser(!popoverUser)
    const closePopoverUser=()=>setPopoverUser(false)

    const openPopoverApp=()=>setPopoverApp(!popoverApp)
    const closePopoverApp=()=>setPopoverApp(false)


  return (
    <EuiPageHeader>
            <EuiPageHeaderContent>
                <EuiHeader style={{width:'100%'}}>
                    <EuiHeaderSection>
                        <EuiHeaderSectionItem>
                            <EuiButtonEmpty onClick={clickSideBar} iconType="menu" color='text'/>
                            <EuiImage src={require('../assets/logo.png')} width="100px" height="25px" />
                            </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem style={{padding:'10px'}}>
                            <EuiAvatar name='S' type='space' size='s' color="#68C4A2"/>
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
                            ]}/>
                    </EuiHeaderSection>
                    <EuiHeaderSection side="right">
                        <EuiFlexGroup gutterSize='xs'>
                            <EuiHeaderSectionItem>
                                <EuiHeaderSectionItemButton onClick={showFlyout} notification={'2'}>
                                    <EuiIcon type="bell" size='m'/>
                                </EuiHeaderSectionItemButton>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiHeaderSectionItemButton notification={'2'}>
                                    <EuiIcon type="email" size='m'/>
                                </EuiHeaderSectionItemButton>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiPopover
                                panelStyle={{outline:'none'}}
                                isOpen={popoverUser}
                                closePopover={closePopoverUser}
                                button={
                                    <EuiHeaderSectionItemButton onClick={openPopoverUser}>
                                        <EuiAvatar name='EL' color="#68C4A2" size='s'/>
                                    </EuiHeaderSectionItemButton>
                                }>
                                    <EuiFlexGroup gutterSize='s' alignItems='center'>
                                        <EuiFlexItem grow={false}>
                                            <EuiAvatar name='DN' imageUrl='/assets/avata.png' size='xl'/>
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
                                panelStyle={{width:'288px'}}
                                isOpen={popoverApp}
                                closePopover={closePopoverApp}
                                button={
                                    <EuiHeaderSectionItemButton onClick={openPopoverApp}>
                                        <EuiIcon type="apps" size='m'/>
                                    </EuiHeaderSectionItemButton>
                                }>
                                    <EuiKeyPadMenu>
                                        <EuiKeyPadMenuItem label="Dashboard">
                                            <EuiIcon type="dashboardApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Canvas">
                                            <EuiIcon type="canvasApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Lens">
                                            <EuiIcon type="lensApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Visualize">
                                            <EuiIcon type="visualizeApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Graph">
                                            <EuiIcon type="graphApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Advanced Settings">
                                            <EuiIcon type="advancedSettingsApp" size="l" />
                                        </EuiKeyPadMenuItem>
                                        <EuiKeyPadMenuItem label="Timelion">
                                            <EuiIcon type="timelionApp" size="l" />
                                        </EuiKeyPadMenuItem>
                                    </EuiKeyPadMenu>
                                </EuiPopover>
                            </EuiHeaderSectionItem>
                        </EuiFlexGroup>
                    </EuiHeaderSection>
                </EuiHeader>
            </EuiPageHeaderContent>
            {isFlyoutVisible && flyout}
        </EuiPageHeader>
  )
}
