import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Đường dẫn ảnh nền và logo
import backgroundImage from '../assets/background.png'; // Đảm bảo ảnh nền đúng
import logo from '../assets/logo.png'; // Đảm bảo logo đúng

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Thêm state cho ghi nhớ đăng nhập
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://fprj-backend.vercel.app/api/users/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      if (rememberMe) {
        localStorage.setItem('email', email); // Lưu email nếu chọn ghi nhớ
      }
      navigate('/teacher-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng nhập thất bại');
    }
  };

  // Hàm điều hướng đến trang quên mật khẩu
  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Đường dẫn tới trang quên mật khẩu
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`, // Gắn ảnh nền
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
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
    },
    buttonHover: {
      backgroundColor: '#0056b3',
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
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '14px',
    },
    rememberMe: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      textAlign: 'left',
    },
    rememberMeCheckbox: {
      marginRight: '10px',
    },
    additionalLinks: {
      marginTop: '10px',
      fontSize: '14px',
    },
    additionalLinksText: {
      color: '#007BFF',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.form}>
        <h2>Đăng nhập</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label>Email/Tên người dùng</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập email"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Nhập mật khẩu"
              style={styles.input}
            />
          </div>

          {/* Phần ghi nhớ đăng nhập */}
          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={styles.rememberMeCheckbox}
            />
            <span>Ghi nhớ đăng nhập</span>
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Đăng nhập
          </button>
        </form>

        {/* Thêm các liên kết quên mật khẩu và tạo tài khoản mới */}
        <div style={styles.additionalLinks}>
          <p>
            <span
              onClick={handleForgotPassword}
              style={styles.additionalLinksText}
            >
              Quên mật khẩu?
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

export default Login;
