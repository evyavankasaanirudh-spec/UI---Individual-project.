const quickCards = [
  { title: 'History', text: 'Trace cricket from its roots to the modern game and iconic moments.', link: '/history' },
  { title: 'Players', text: 'Meet legendary players and rising stars who shaped cricket history.', link: '/players' },
  { title: 'Leagues', text: 'Explore the ICC events, T20 leagues, and global competitions.', link: '/leagues' },
];

function Home() {
  return (
    <>
      <section className="page-card hero-grid">
        <article className="hero-copy">
          <p className="eyebrow">Classic cricket hub</p>
          <h1>Welcome to the Grand Cricket Experience</h1>
          <p className="lede">
            Explore the sport from its origins to modern tournaments, famous players, match rules,
            live-style stats, shopping, users, cart, and a simple cricket interest form.
          </p>
          <div className="button-row">
            <a className="btn btn-primary" href="/history">Discover history</a>
            <a className="btn btn-secondary" href="/shop">Visit shop</a>
          </div>
        </article>
        <figure className="hero-media">
          <img src="../src/assets/Cricket.png" alt="Cricket action" className="hero-image" />
        </figure>
      </section>

      <section className="page-card">
        <p className="eyebrow">Explore more</p>
        <h2>Featured cricket sections</h2>
        <div className="info-grid">
          {quickCards.map((card) => (
            <article className="mini-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a className="btn btn-secondary" href={card.link}>Open section</a>
            </article>
          ))}
        </div>
      </section>

      <section className="page-card">
        <p className="eyebrow">Why fans love cricket</p>
        <div className="info-grid">
          <article className="mini-card">
            <h3>Strategy</h3>
            <p>Every match blends skill, tactics, and momentum from the first over to the last wicket.</p>
          </article>
          <article className="mini-card">
            <h3>Global passion</h3>
            <p>Cricket unites fans across continents through iconic tournaments and club leagues.</p>
          </article>
          <article className="mini-card">
            <h3>Classic style</h3>
            <p>From vintage grounds to modern stadiums, the game continues to inspire new generations.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
