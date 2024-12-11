import { EuiFlexGroup, EuiLink, EuiPageTemplate, EuiText } from '@elastic/eui'
import React from 'react'

export default function Footer() {
  return (
    <EuiPageTemplate.BottomBar paddingSize='m'>
    <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
        <EuiText size='xs'>School Connected M- Hệ thống quản lý trường học</EuiText>
        <EuiLink><EuiText size='xs'>info@ecotel.com.vn</EuiText></EuiLink>
    </EuiFlexGroup>
</EuiPageTemplate.BottomBar>
  )
}
