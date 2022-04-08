import Link from 'next/link';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { addnumber, minus } from '../redux/counterReducer';

interface E extends DefaultRootState {
  counterReducer: number;
}

const AboutPage = () => {
  const counter = useSelector<E>((state) => state.counterReducer);

  const dispach = useDispatch();

  return (
    <Layout title='About | Next.js + TypeScript Example'>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispach(addnumber(5))}>add </button>
      <button onClick={() => dispach(minus(3))}>add </button>
    </Layout>
  );
};

export default AboutPage;
