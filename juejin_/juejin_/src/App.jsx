import { useState,useEffect,Navigate } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
  lazy,
  Suspense
} from 'react'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Synthesis = lazy(() => import('@/pages/Synthesis'))
const Charts = lazy(() => import('@/pages/Charts'))
const Backend = lazy(() => import('@/pages/Backend'))
const Front = lazy(() => import('@/pages/Front'))
const Private = lazy(() => import('@/pages/Private'))


function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
     <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/synthesis" element={<Synthesis />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/front" element={<Front />} />
        <Route path="/private" element={<Private />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/search" element={<Search />} />
      </Route>
     </Routes>
    </Suspense>
    </>
  )
}

export default App
