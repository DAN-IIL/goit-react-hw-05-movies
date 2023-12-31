import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import { Container } from './App.styled';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../../page/Home/Home'));
const Movies = lazy(() => import('../../page/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../page/MovieDetails/MovieDetails')
);
const Credits = lazy(() => import('../../components/Credits'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
};
