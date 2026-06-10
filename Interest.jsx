import { useState } from 'react';

function Interest() {
  const [form, setForm] = useState({ name: '', email: '', format: 'Test', experience: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.experience.trim()) nextErrors.experience = 'Tell us your experience level.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSuccess('');
      return;
    }
    setSuccess(`Thanks ${form.name}! Your interest in ${form.format} cricket has been recorded.`);
  };

  return (
    <section className="page-card">
      <p className="eyebrow">Interest form</p>
      <h1>Join the cricket community</h1>
      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </label>
        <label>
          Favorite format
          <select name="format" value={form.format} onChange={handleChange}>
            <option value="Test">Test</option>
            <option value="ODI">ODI</option>
            <option value="T20">T20</option>
          </select>
        </label>
        <label>
          Experience level
          <textarea name="experience" value={form.experience} onChange={handleChange} rows="4" />
          {errors.experience && <span className="error-text">{errors.experience}</span>}
        </label>
        <button className="btn btn-primary" type="submit">Submit interest</button>
      </form>
      {success ? <p className="success-text">{success}</p> : null}
    </section>
  );
}

export default Interest;
