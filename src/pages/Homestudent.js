import React, { useState } from 'react';
import Headerstudent from '../component/Headerstudent';
import { Outlet } from 'react-router-dom';
import { EuiPageTemplate } from '@elastic/eui';
import Footer from '../component/Footer';
import SideBarstudent from '../component/SideBarstudent';

export default function Homestudent() {
  const [openSideBarstudent, setOpenSideBarstudent] = useState(false);
  const clickSideBarstudent = () => setOpenSideBarstudent(!openSideBarstudent);

  return (
    <>
      <EuiPageTemplate>
        <Headerstudent clickSideBarstudent={clickSideBarstudent} />

        {/* Hiển thị sidebar nếu openSideBarstudent là true */}
        {openSideBarstudent && (
          <EuiPageTemplate.Sidebar minWidth="220px" paddingSize="s">
            <SideBarstudent />
          </EuiPageTemplate.Sidebar>
        )}

        <EuiPageTemplate.Section>
          <Outlet />
        </EuiPageTemplate.Section>

        <Footer />
      </EuiPageTemplate>
    </>
  );
}
