'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Send, Check } from 'lucide-react';

export default function ReservasSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    fecha: '',
    servicio: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío
    console.log('Datos del formulario:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', telefono: '', correo: '', fecha: '', servicio: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservas" className="py-20 sm:py-24 bg-[#1c1b1b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Reserva tu <span className="text-[#c9a857]">Cita</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#151414] border border-[#c9a857]/20 rounded-2xl p-8 sm:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#c9a857]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#c9a857]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Reserva Enviada!</h3>
              <p className="text-gray-300">Nos pondremos en contacto contigo pronto.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2 text-[#c9a857]" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1c1b1b] border border-[#c9a857]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a857] focus:ring-2 focus:ring-[#c9a857]/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2 text-[#c9a857]" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1c1b1b] border border-[#c9a857]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a857] focus:ring-2 focus:ring-[#c9a857]/20 transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2 text-[#c9a857]" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1c1b1b] border border-[#c9a857]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a857] focus:ring-2 focus:ring-[#c9a857]/20 transition-all"
                  placeholder="tu@correo.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2 text-[#c9a857]" />
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-[#1c1b1b] border border-[#c9a857]/30 rounded-lg text-white focus:outline-none focus:border-[#c9a857] focus:ring-2 focus:ring-[#c9a857]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 inline mr-2 text-[#c9a857]" />
                    Servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1c1b1b] border border-[#c9a857]/30 rounded-lg text-white focus:outline-none focus:border-[#c9a857] focus:ring-2 focus:ring-[#c9a857]/20 transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="coloracion">Coloración</option>
                    <option value="barberia">Barbería</option>
                    <option value="peinados">Peinados</option>
                    <option value="manicure">Manicure</option>
                    <option value="tratamientos">Tratamientos</option>
                    <option value="premium">Servicios Premium</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#c9a857] hover:bg-[#d4af37] text-[#1c1b1b] font-bold py-4 px-8 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-[#c9a857]/30 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Reserva
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}


