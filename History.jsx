const milestones = [
  { title: 'Origins in England', text: 'Cricket is believed to have originated in southern England in the late 16th century, evolving from village games played with bat and ball.' },
  { title: 'Village and parish matches', text: 'Early cricket was often played between nearby villages, making the sport deeply connected to local communities and traditions.' },
  { title: 'The first formal clubs', text: 'By the 18th century, clubs began to formalize the rules, organize fixtures, and build a stronger sense of competition.' },
  { title: 'The rise of county cricket', text: 'County teams gave the game structure and helped create the first lasting rivalries in English cricket.' },
  { title: 'The birth of international cricket', text: 'The first international matches introduced a new level of prestige and set the stage for globally recognized teams.' },
  { title: 'The Test match tradition', text: 'Test cricket became the longest and most respected format, rewarding patience, strategy, and endurance.' },
  { title: 'The impact of the British Empire', text: 'Cricket spread across colonies and commonwealth regions, becoming a symbol of shared culture and sporting identity.' },
  { title: 'India and Pakistan rise', text: 'The subcontinent produced iconic rivalries and passionate fanbases that transformed cricket into a mass-market sport.' },
  { title: 'The World Cup era', text: 'ICC World Cups turned cricket into a global spectacle, drawing record audiences and national pride.' },
  { title: 'The T20 revolution', text: 'The shorter format brought speed, power hitting, and entertainment, attracting younger fans and new markets.' },
  { title: 'Franchise leagues', text: 'Leagues such as the IPL created a modern business side to cricket, combining sport, celebrity, and innovation.' },
  { title: 'Cricket today', text: 'Today cricket balances tradition and modernity, from classic Test matches to high-energy T20 nights under stadium lights.' },
];

function History() {
  return (
    <section className="page-card">
      <p className="eyebrow">History of cricket</p>
      <h1>From village games to global glory</h1>
      <p className="lede">
        Cricket has grown from a simple village pastime into one of the world’s most admired sports. Its history reflects changing cultures, bold rivalries, and a passionate following across continents.
      </p>

      <div className="timeline">
        {milestones.map((item) => (
          <article className="timeline-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <article className="mini-card" style={{ marginTop: '18px' }}>
        <h2>Why the history matters</h2>
        <p>
          Understanding cricket’s past helps explain why the game values tradition, sportsmanship, and fierce competition. It also shows how innovation, such as one-day matches and T20 cricket, keeps the sport fresh.
        </p>
      </article>
    </section>
  );
}

export default History;
