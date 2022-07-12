import { HashRouter, Routes, Route } from 'react-router-dom'

import { Header } from './cmps/header'
import { Footer } from './cmps/footer'
import { ResultPage } from './pages/result'
import { HomePage } from './pages/home'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
