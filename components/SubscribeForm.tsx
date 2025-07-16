"use client";

import { FC, FormEvent, useState } from 'react';
import * as yup from 'yup';

interface SubscribeFormProps {
  onSuccess: () => void;
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  profession: yup.string().required(),
  interests: yup.array(yup.string()),
  gdpr: yup.boolean().oneOf([true]),
});

/**
 * Formulario completo de suscripción.
 */
const SubscribeForm: FC<SubscribeFormProps> = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    profession: '',
    interests: [] as string[],
    gdpr: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === 'checkbox' && name === 'interests'
        ? checked
          ? [...f.interests, value]
          : f.interests.filter((i) => i !== value)
        : type === 'checkbox'
        ? checked
        : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await schema.validate(form);
      // TODO: llamar a API
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-900">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-400">Suscríbete</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
            required
          />
          <input
            name="profession"
            value={form.profession}
            onChange={handleChange}
            placeholder="Profesión"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
            required
          />
          <div className="space-y-2">
            <p className="text-sm text-gray-300">Intereses:</p>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="frontend"
                  onChange={handleChange}
                  className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                />
                <span className="text-gray-300">Frontend</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="backend"
                  onChange={handleChange}
                  className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                />
                <span className="text-gray-300">Backend</span>
              </label>
            </div>
          </div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="gdpr"
              checked={form.gdpr}
              onChange={handleChange}
              className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-300">Acepto recibir comunicaciones</span>
          </label>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
