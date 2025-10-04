
import Link from 'next/link';
import Navigation from './components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md rounded-full text-sm font-medium mb-8 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
              Versátil Salón Premium
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="block text-white mb-2">Transformamos</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient-x">
              Tu Estilo
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Descubre la excelencia en belleza y estilo. Nuestros profesionales certificados 
            te brindan una experiencia única con técnicas modernas y productos de primera calidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <Link 
              href='/reservas' 
              className="group bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-black font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-transparent"></div>
              <span className="flex items-center relative z-10">
              Reservar Cita
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href='/servicios'
              className="group border-2 border-amber-400/50 text-white hover:bg-amber-400 hover:text-black font-semibold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-500 backdrop-blur-sm hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20"
            >
              <span className="flex items-center">
              Ver Servicios
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-xs sm:text-sm text-gray-400">Clientes Satisfechos</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Años de Experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
              Nuestros Servicios
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Servicios de <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient-x">Excelencia</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios profesionales diseñados para realzar tu belleza natural
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden border border-gray-800 hover:border-amber-500/50 transform hover:scale-105">
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                    <svg className="w-8 h-8 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Cortes Modernos</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Cortes de cabello contemporáneos que se adaptan a tu personalidad y estilo de vida.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">$25,000</span>
                  <Link href="/reservas" className="text-amber-400 hover:text-amber-300 font-medium group transition-colors duration-300">
                    Reservar
                    <svg className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden border border-gray-800 hover:border-amber-500/50 transform hover:scale-105">
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                    <svg className="w-8 h-8 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Coloración Premium</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Tintes y mechas profesionales con productos de las mejores marcas del mercado.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">$45,000</span>
                  <Link href="/reservas" className="text-amber-400 hover:text-amber-300 font-medium group transition-colors duration-300">
                    Reservar
                    <svg className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden border border-gray-800 hover:border-amber-500/50 transform hover:scale-105">
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                    <svg className="w-8 h-8 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Tratamientos</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Tratamientos capilares especializados para restaurar y nutrir tu cabello.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">$35,000</span>
                  <Link href="/reservas" className="text-amber-400 hover:text-amber-300 font-medium group transition-colors duration-300">
                    Reservar
                    <svg className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 animate-fade-in-up animation-delay-400">
            <Link 
              href="/servicios" 
              className="inline-flex items-center px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-black font-bold rounded-full transition-all duration-500 group transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-transparent"></div>
              <span className="relative z-10 flex items-center">
                Ver Todos los Servicios
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
              ¿Por qué elegirnos?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              La <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient-x">Diferencia</span> que Marca
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos distingue en el mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group animate-fade-in-up animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                <svg className="w-10 h-10 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Profesionales Certificados</h3>
              <p className="text-gray-300 leading-relaxed">
                Nuestro equipo está formado por estilistas certificados con años de experiencia y formación continua en las últimas técnicas.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                <svg className="w-10 h-10 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Horarios Flexibles</h3>
              <p className="text-gray-300 leading-relaxed">
                Abrimos de lunes a sábado con horarios que se adaptan a tu rutina. Reserva tu cita online de manera fácil y rápida.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-600 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
                <svg className="w-10 h-10 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Productos Premium</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos solo productos de las mejores marcas internacionales para garantizar el cuidado y la salud de tu cabello.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
            ¿Lista para Transformar tu Estilo?
          </h2>
          <p className="text-lg sm:text-xl text-black/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Reserva tu cita ahora y descubre por qué somos la opción preferida de cientos de clientes satisfechos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-400">
            <Link 
              href="/reservas" 
              className="bg-black text-amber-400 hover:bg-gray-900 font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-black/30"
            >
              Reservar Ahora
            </Link>
            <Link 
              href="/contacto" 
              className="border-2 border-black text-black hover:bg-black hover:text-amber-400 font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-500"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/56959293175?text=Hola!%20Me%20interesa%20reservar%20una%20cita%20en%20Versátil%20Salón"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-float"
          style={{
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: 'none',
            outline: 'none'
          }}
        >
          <svg 
            className="w-7 h-7" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            style={{ display: 'block' }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Tooltip */}
          <div 
            className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px'
            }}
          >
            ¡Escríbenos por WhatsApp!
            <div 
              className="absolute top-full right-4"
              style={{
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #111827'
              }}
            ></div>
          </div>
        </a>
      </div>
    </div>
  );
}