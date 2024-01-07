import { Triangle } from 'react-loader-spinner';
import './loader.css';

function Loader(): JSX.Element {
  return (
    <div className="container">
      <span className="loader">
        <Triangle color="#f2890f" />
      </span>
    </div>
  );
}

export default Loader;
