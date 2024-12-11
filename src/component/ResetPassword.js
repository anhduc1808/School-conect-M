import React from 'react';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const location = useLocation();
  const { email } = location.state || {};  // Lấy email từ state

  return (
    <div>
      <h2>Đặt lại mật khẩu</h2>
      {email && <p>Đặt lại mật khẩu cho email: {email}</p>}
      {/* Form để nhập mật khẩu mới */}
    </div>
  );
};

export default ResetPassword;
