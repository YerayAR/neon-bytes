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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full p-2 text-black"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 text-black"
        required
      />
      <input
        name="profession"
        value={form.profession}
        onChange={handleChange}
        placeholder="Profesión"
        className="w-full p-2 text-black"
        required
      />
      <div>
        <label className="mr-2">
          <input
            type="checkbox"
            name="interests"
            value="frontend"
            onChange={handleChange}
          />
          Frontend
        </label>
        <label className="mr-2">
          <input
            type="checkbox"
            name="interests"
            value="backend"
            onChange={handleChange}
          />
          Backend
        </label>
      </div>
      <label className="block">
        <input
          type="checkbox"
          name="gdpr"
          checked={form.gdpr}
          onChange={handleChange}
        />
        Acepto recibir comunicaciones
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="px-4 py-2 bg-pink-600 rounded">
        Suscribirse
      </button>
    </form>
  );
};

export default SubscribeForm;
