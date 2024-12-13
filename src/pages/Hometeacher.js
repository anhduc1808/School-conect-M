import React, { useState } from 'react';
import Headersteacher from '../component/Headersteacher';
import { Outlet } from 'react-router-dom';
import { EuiPageTemplate } from '@elastic/eui';
import Footer from '../component/Footer';
import Sidebarteacher from '../component/SideBarteacher';

export default function Hometeacher() {
  const [openSideBarteacher, setOpenSideBarteacher] = useState(false);  {/* Thêm dấu chấm phẩy */}
  const clickSideBarteacher = () => setOpenSideBarteacher(!openSideBarteacher);  {/* Thêm dấu chấm phẩy */}
  
  return (
    <>
      <EuiPageTemplate>
        <Headersteacher clickSideBarteacher={clickSideBarteacher} />  {/* Thêm dấu chấm phẩy */}
        {openSideBarteacher && (
          <EuiPageTemplate.Sidebar minWidth='220px' paddingSize='s'>
            <Sidebarteacher />  {/* Không thay đổi */}
          </EuiPageTemplate.Sidebar>
        )}
        <Outlet />
        <Footer />
      </EuiPageTemplate>
    </>
  );
}
