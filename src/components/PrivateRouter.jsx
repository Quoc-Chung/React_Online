import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // 👈 THÊM useLocation
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PrivateRouter = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation(); // 👈 THÊM DÒNG NÀY
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated]);

  const handleLoginRedirect = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate("/login", {
        state: { from: location.pathname }, 
      });
    }, 300);
  };

  if (!isAuthenticated) {
    return (
      <Modal show={showModal} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLoginRedirect}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return children;
};

export default PrivateRouter;
