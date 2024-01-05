import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        navigate('/login');
    };

    return (
        <div className='content' style={{ padding: '20px', textAlign: 'center', justifyContent: "center", margin: 0}}>
        {/* ... (other components) */}
        <Button variant="contained" onClick={handleLogout}>BACK TO LOGIN PAGE</Button>
    </div>
    );
};

export default Logout