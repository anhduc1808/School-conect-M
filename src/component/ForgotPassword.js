import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Đường dẫn ảnh nền và logo
import backgroundImage from '../assets/background.png';
import logo from '../assets/logo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Trạng thái đang xử lý
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Gửi yêu cầu đến API
      const response = await axios.post(
        'https://fprj-backend.vercel.app/api/users/forgot-password',
        { email },
        { headers: { 'Content-Type': 'application/json' } } // Đảm bảo header đúng
      );

      // Kiểm tra phản hồi từ API
      if (response.status === 200) {
        alert('Kiểm tra email của bạn để tiếp tục đặt lại mật khẩu.');
        // Điều hướng đến trang đặt lại mật khẩu
        navigate('/reset-password', { state: { email } });
      } else {
        setError('Đã xảy ra lỗi không xác định. Vui lòng thử lại.');
      }
    } catch (err) {
      // Xử lý lỗi chi tiết
      console.error('Lỗi API:', err);
      if (err.response) {
        setError(err.response.data.message || 'Đã xảy ra lỗi từ máy chủ.');
      } else if (err.request) {
        setError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra mạng.');
      } else {
        setError('Đã xảy ra lỗi không xác định.');
      }
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    logoContainer: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: '#fff',
      padding: '5px 15px',
      borderRadius: '8px',
    },
    logo: {
      width: '80px',
      height: 'auto',
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px 30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      opacity: loading ? 0.7 : 1,
    },
    error: {
      color: 'red',
      marginBottom: '15px',
      fontSize: '14px',
    },
    footer: {
      position: 'absolute',
      bottom: '10px',
      right: '20px',
      fontSize: '14px',
      color: '#fff',
    },
    additionalLinks: {
      marginTop: '10px',
      fontSize: '14px',
    },
    additionalLinksText: {
      color: '#007BFF',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.form}>
        <h2>Quên mật khẩu</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleResetPassword}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập email của bạn"
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Đang xử lý...' : 'Gửi yêu cầu'}
          </button>
        </form>

        <div style={styles.additionalLinks}>
          <p>Đã có tài khoản?
            <span
              onClick={() => navigate('/login')}
              style={styles.additionalLinksText}
            >
               Đăng nhập
            </span>
          </p>
        </div>
      </div>

      <div style={styles.footer}>
        <p>ecotel@gmail.com</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
