import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/user-registration">Cadastro de usuário</Link>
      <br />
      <Link to="/register-brand">Cadastrar marca</Link>
    </div>
  )
}

export default Home;
