import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Desenrola Direito</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
              <a href="#artigos" className="text-gray-700 hover:text-blue-600 font-medium">Artigos</a>
              <a href="#calculadoras" className="text-gray-700 hover:text-blue-600 font-medium">Calculadoras</a>
              <a href="#modelos" className="text-gray-700 hover:text-blue-600 font-medium">Baixar Modelos</a>
              <a href="#consulta" className="text-gray-700 hover:text-blue-600 font-medium">Consulta Jurídica</a>
            </nav>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Entenda Seus Direitos de Forma <span className="text-blue-600">Clara e Descomplicada</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aprenda a defender seus direitos e solucionar problemas do dia a dia sem precisar de advogado.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium text-lg">
              Ver Artigos
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-medium text-lg">
              Publicações Recentes
            </button>
          </div>
        </div>
      </section>

      {/* Acesso Rápido */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Acesso Rápido</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['Direito do Consumidor', 'Direito Trabalhista', 'Direito Civil', 'Direito Familiar'].map((area) => (
              <div key={area} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>

          {/* Espaço Anúncio */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Espaço reservado para anúncio</h3>
            <p className="text-yellow-700">Este espaço será substituído por anúncios do Google AdSense</p>
          </div>
        </div>
      </section>

      {/* Artigos Recentes */}
      <section id="artigos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Artigos Recentes</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Ver todos →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Título do Artigo {item}</h3>
                <p className="text-gray-600 text-sm mb-4">Descrição breve do artigo sobre direitos do consumidor e como proceder em casos comuns...</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Ler mais →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <span className="text-xl font-bold">Desenrola Direito</span>
            </div>
            <p className="text-gray-400">Simplificando o Direito para todos</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
