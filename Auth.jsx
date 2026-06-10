import { useState } from 'react';

function Auth() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (mode === 'signup' && !form.name.trim()) {
      setMessage('Please enter your name to sign up.');
      return;
    }

    if (!form.email || !form.password) {
      setMessage('Email and password are required.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('cricket-users') || '[]');

    if (mode === 'signup') {
      const exists = storedUsers.some((user) => user.email.toLowerCase() === form.email.toLowerCase());
      if (exists) {
        setMessage('This account already exists. Please log in instead.');
        return;
      }

      storedUsers.push({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      localStorage.setItem('cricket-users', JSON.stringify(storedUsers));
      localStorage.setItem('cricket-current-user', form.email.trim().toLowerCase());
      setMessage('Sign up successful. Redirecting...');
    } else {
      const foundUser = storedUsers.find(
        (user) => user.email.toLowerCase() === form.email.toLowerCase() && user.password === form.password,
      );

      if (!foundUser) {
        setMessage('Invalid email or password. Sign up first if you do not have an account.');
        return;
      }

      localStorage.setItem('cricket-current-user', foundUser.email);
      setMessage('Login successful. Redirecting...');
    }

    setTimeout(() => {
      window.location.href = '/';
    }, 700);
  };

  return (
    <section className="page-card auth-layout">
      <article className="auth-card">
        <p className="eyebrow">Login / Sign up</p>
        <h1>Access the cricket portal</h1>
        <div className="toggle-row">
          <button className={mode === 'login' ? 'tab active' : 'tab'} type="button" onClick={() => setMode('login')}>Login</button>
          <button className={mode === 'signup' ? 'tab active' : 'tab'} type="button" onClick={() => setMode('signup')}>Sign up</button>
        </div>
        <form className="form-card" onSubmit={submitForm}>
          {mode === 'signup' ? (
            <label>
              Full name
              <input name="name" value={form.name} onChange={handleChange} />
            </label>
          ) : null}
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} />
          </label>
          <button className="btn btn-primary" type="submit">{mode === 'login' ? 'Login' : 'Create account'}</button>
        </form>
        {message ? <p className="success-text">{message}</p> : null}
      </article>
      <article className="mini-card">
        <h2>Redirect note</h2>
        <p>After a successful login or sign-up, the app redirects you back to the homepage.</p>
      </article>
    </section>
  );
}

export default Auth;
