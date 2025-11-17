import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllArticles from './pages/AllArticles';
import Article from './pages/Article';
import CategoryArticles from './pages/CategoryArticles';
import Search from './pages/Search';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import LegalConsultation from './pages/LegalConsultation';
import DocumentModels from './pages/DocumentModels';
import SupportCommunity from './pages/SupportCommunity';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/artigos" component={AllArticles} exact />
              <Route path="/artigos/:slug" component={Article} />
              <Route path="/categorias/:slug" component={CategoryArticles} />
              <Route path="/busca" component={Search} />
              <Route path="/privacidade" component={Privacy} />
              <Route path="/termos" component={Terms} />
              <Route path="/sobre" component={About} />
              <Route path="/calculadoras" component={Calculators} />
              <Route path="/contato" component={Contact} />
              <Route path="/consulta-juridica" component={LegalConsultation} />
              <Route path="/modelos-documentos" component={DocumentModels} />
              <Route path="/comunidade" component={SupportCommunity} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
