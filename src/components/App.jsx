import { Routes, Route} from 'react-router-dom';
import { StartHeader } from './startHeader';
import { lazy,Suspense } from 'react';
// import { Home } from 'Pages/Home';
// import {Movies} from 'Pages/Movies';
// import { Card } from 'Pages/Card';
// import { Cast } from 'Pages/Cast';
// import { Reviews } from 'Pages/Reviews';

const Home = lazy(() => import("../Pages/Home/Home"));

// import('../Pages/Movies').then(module => console.log(module));
const Movies = lazy(() => import("../Pages/Movies/Movies"));
const Card = lazy(() => import("../Pages/Card/Card"));
const Cast = lazy(() => import("../Pages/Cast/Cast"));
const Reviews = lazy(() => import("../Pages/Reviews/Reviews"));

export const App = () => {
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route path='/' element={<StartHeader/>}>
          <Route index element={<Home/> }/>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/movies/:idMovie' element={<Card />}>
            <Route path='cast' element={<Cast />}/>
            <Route path='reviews' element={<Reviews />}/>
          </Route>
        </Route>
        <Route path='/*' element={<Home/>}></Route>
      </Routes>
        </Suspense>
    </>
  );
};


    //  <Routes>
    //     <Route path='/' element={<StartHeader/>}>
    //       <Route index element={<Home />}/>
    //       <Route path='/movies' element={<Movies />}></Route>
    //       <Route path='/movies/:idMovie' element={<Card />}>
    //         <Route path='cast' element={<Cast />}/>
    //         <Route path='reviews' element={<Reviews />}/>
    //       </Route>
    //     </Route>
    //     <Route path='/*' element={<Home />}></Route>
    //   </Routes>
