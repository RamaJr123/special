import IndexPage from './components/IndexPage';
import Swal from 'sweetalert2';
import './style.css';

const awal = () => {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });
};

function App() {
  return (
    <div className="App">
      <IndexPage />
    </div>
  );
}

export default App;
