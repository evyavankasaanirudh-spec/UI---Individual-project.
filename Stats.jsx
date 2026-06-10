const stats = [
  { label: 'World Cups won by Australia', value: '6' },
  { label: 'Players in ICC Hall of Fame', value: '100+' },
  { label: 'Overs in a standard Test match', value: '90' },
  { label: 'Maximum players in a team', value: '11' },
  { label: 'Wickets taken by Muttiah Muralitharan', value: '800+' },
  { label: 'Runs scored by Sachin Tendulkar in Tests', value: '15,921' },
  { label: 'Runs scored by Sachin Tendulkar in ODIs', value: '18,426' },
  { label: 'Centuries by Sachin Tendulkar', value: '100' },
  { label: 'Highest individual Test score', value: '400*' },
  { label: 'Highest individual ODI score', value: '264' },
  { label: 'Fastest ODI century', value: '31 balls' },
  { label: 'Fastest T20 century', value: '35 balls' },
  { label: 'Most wickets in T20 internationals', value: '100+' },
  { label: 'Most sixes in international cricket', value: '500+' },
  { label: 'Most catches in Test cricket', value: '210+' },
  { label: 'Most runs in World Cup history', value: '2,500+' },
  { label: 'Most wickets in World Cup history', value: '70+' },
  { label: 'Highest team total in ODI', value: '498/4' },
  { label: 'Highest team total in T20I', value: '278/3' },
  { label: 'Longest winning streak in Tests', value: '16 matches' },
  { label: 'Most consecutive ODI wins', value: '21' },
  { label: 'Most player-of-the-match awards in IPL', value: '17' },
  { label: 'Most centuries in IPL', value: '7' },
  { label: 'Most wickets in IPL', value: '200+' },
  { label: 'Highest strike rate in T20 cricket', value: '180+' },
  { label: 'Most runs in a single IPL season', value: '973' },
  { label: 'Most wickets in a single IPL season', value: '32' },
  { label: 'Most sixes in an ODI innings', value: '16' },
  { label: 'Most four-wicket hauls in Test cricket', value: '60+' },
  { label: 'Most five-wicket hauls in Test cricket', value: '67' },
  { label: 'Most wickets in a single Test match', value: '13' },
  { label: 'Most runs in a Test series', value: '974' },
  { label: 'Most runs in an ODI series', value: '765' },
  { label: 'Highest partnership in Tests', value: '624 runs' },
  { label: 'Highest partnership in ODIs', value: '323 runs' },
  { label: 'Longest individual innings in Test cricket', value: '1,196 balls' },
  { label: 'Most maiden overs in a Test innings', value: '16' },
  { label: 'Most no-balls in an ODI', value: '10+' },
  { label: 'Most boundaries in a T20 innings', value: '20+' },
  { label: 'Most runs by a captain in Tests', value: '7,000+' },
  { label: 'Most matches played by a Test player', value: '200+' },
  { label: 'Most wickets in World Test Championship', value: '150+' },
  { label: 'Most runs in a single T20 season', value: '800+' },
  { label: 'Most sixes in a single T20 innings', value: '18' },
  { label: 'Most dot balls bowled in a Test match', value: '200+' },
  { label: 'Highest economy rate in a T20 final', value: '6.00' },
  { label: 'Most successful run-chase in ODI history', value: '359' },
];

function Stats() {
  return (
    <section className="page-card">
      <p className="eyebrow">Cricket stats</p>
      <h1>Quick numbers from the game</h1>
      <div className="stat-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
