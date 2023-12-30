
import { Link } from 'react-router-dom';
import classes from './Error.module.css';


export default function Error ()  {
  return (
    <section className={classes.section}>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  );
};

