import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo3 from "../assets/logo3.png";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiButton,
  EuiImage,
  EuiHorizontalRule,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiButtonIcon
} from '@elastic/eui';

export default function EventDetail() {
  const navigate = useNavigate(); // Create a navigate function
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track if event is confirmed

  const handleBackClick = () => {
    navigate('/student'); // Navigate to the student page
  };

  const handleJoinClick = () => {
    setIsModalVisible(true); // Show confirmation modal when "Tham gia" is clicked
  };

  const handleConfirmJoin = () => {
    setIsConfirmed(true);
    setIsModalVisible(false); // Close modal after confirmation
    alert('Bạn đã tham gia sự kiện "Giải bóng đá khối 10"!');
  };

  const handleCancelJoin = () => {
    setIsConfirmed(false);
    setIsModalVisible(false); // Close modal after cancelation
    alert('Bạn đã hủy tham gia sự kiện.');
  };

  return (
    <div style={{ padding: '0', margin: '0', width: '100%', boxSizing: 'border-box' }}>
      {/* Back Button and Title */}
      <EuiFlexGroup alignItems="center" gutterSize="s">
        <EuiButton
          iconType="arrowLeft"
          size="s" // Small size for the button
          style={{
            width: '40px', // Set width to make it square
            height: '40px', // Set height to make it square
            borderRadius: '8px', // Optional: round the corners (use '0' for sharp corners)
            padding: 0, // Remove padding for icon-only button
            textAlign: 'center', // Center the icon
            backgroundColor: '#0070cc', // Primary blue color (same as the "Tham gia" button)
            color: '#fff', // White icon color
            borderColor: '#0070cc' // Ensure the border matches the background color
          }}
          onClick={handleBackClick} // Attach onClick handler
        />
        <EuiTitle size="l">
          <h2>Xem chi tiết: Giải bóng đá khối 10</h2>
        </EuiTitle>
      </EuiFlexGroup>

      <EuiHorizontalRule margin="l" />

      {/* Event Details Section */}
      <EuiFlexGroup gutterSize="l" direction="column">
        <EuiFlexItem>
          <EuiTitle size="m">
            <h3>Giải bóng đá khối 10</h3>
          </EuiTitle>

          {/* FlexGroup for items on the same line */}
          <EuiFlexGroup direction="row" gutterSize="l" alignItems="center">
            <EuiFlexItem>
              <p><strong>Đơn vị tổ chức:</strong> Phòng thể thao</p>
            </EuiFlexItem>
            <EuiFlexItem>
              <p><strong>Phân loại:</strong> Bắt buộc</p>
            </EuiFlexItem>
            <EuiFlexItem>
              <p><strong>Nơi tổ chức:</strong> Sân vận động</p>
            </EuiFlexItem>
            <EuiFlexItem>
              <p><strong>Thời gian diễn ra:</strong> 16:00 30/02/2024 - 18:00 30/02/2024</p>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        {/* Content Section with Image and Description */}
        <EuiFlexGroup gutterSize="l" direction="row" style={{ marginTop: '20px' }}>
          {/* Left Section: Description in Textarea */}
          <EuiFlexItem style={{ flex: 1, position: 'relative', paddingRight: '20px' }}>
            <textarea
              readOnly
              value={
                `Giải bóng đá khối 10 trường THPT Bách Khoa là một sự kiện thể thao thường niên nhằm tạo sân chơi bổ ích, lành mạnh cho các học sinh mới. Đây không chỉ là cơ hội để các bạn thể hiện tài năng bóng đá mà còn là dịp để gắn kết tình bạn, rèn luyện tinh thần đồng đội và học hỏi lẫn nhau.
                
                Với sự tham gia của các lớp thuộc khối 10, giải đấu được tổ chức theo thể thức loại trực tiếp hoặc vòng tròn tính điểm, đảm bảo tính công bằng và kịch tính. Các đội sẽ tranh tài tại sân trường với sự cổ vũ nhiệt tình từ bạn bè và thầy cô.
                
                Không chỉ là một giải đấu thể thao, đây còn là nơi các bạn trẻ thể hiện sự nhiệt huyết và tinh thần đoàn kết của thế hệ học sinh Bách Khoa, góp phần tạo nên những kỷ niệm đáng nhớ trong năm học đầu tiên tại mái trường này.`
              }
              style={{
                width: '115%', // Full width for the textarea
                height: '451px', // Set height to match the overall design
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                resize: 'none', // Disable resize handle
                backgroundColor: '#fff', // Set the background to white
                color: '#333',
                boxSizing: 'border-box',
              }}
            />
          </EuiFlexItem>

          {/* Divider */}
          <div
            style={{
              width: '1px',
              backgroundColor: '#d3d3d3',
              height: '100%', 
              margin: '0 20px' // Space between content and image
            }}
          ></div>

          {/* Right Section: Image */}
          <EuiFlexItem style={{ flex: 1 }}>
            <EuiImage
              size="s" // Size can be adjusted accordingly
              hasShadow
              allowFullScreen
              src={logo3} // Replace with the actual image path
              alt="Giải bóng đá khối 10"
              style={{ width: '600px', height: '451px' }} // Resize the image to 600x451
            />
            <EuiText textAlign="center" style={{ marginTop: '8px' }}>
              Giải bóng đá khối 10
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>

      <EuiHorizontalRule margin="l" />

      {/* Action Button */}
      <EuiFlexGroup justifyContent="flexEnd">
        <EuiButton fill iconType="save" size="m" onClick={handleJoinClick}>
          Tham gia
        </EuiButton>
      </EuiFlexGroup>

      {/* Confirmation Modal */}
      {isModalVisible && (
        <EuiModal onClose={() => setIsModalVisible(false)} style={{ maxWidth: '500px' }}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Xác nhận tham gia sự kiện</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <EuiText>
              Bạn có chắc chắn muốn tham gia sự kiện <strong>"Giải bóng đá khối 10"</strong>?
            </EuiText>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButtonEmpty onClick={handleCancelJoin}>Hủy</EuiButtonEmpty>
            <EuiButton onClick={handleConfirmJoin} fill>Xác nhận</EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </div>
  );
}
