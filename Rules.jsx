function Rules() {
  const sections = [
    {
      title: 'Basic game structure',
      items: [
        'Each team fields 11 players, with one captain leading strategy, field placements, and DRS decisions.',
        'A match begins with a toss, and the winning captain chooses to bat or bowl first depending on pitch and weather conditions.',
        'The batting side scores runs by hitting the ball and running between the wickets, or by clearing the boundary for four or six.',
      ],
    },
    {
      title: 'How batters get out',
      items: [
        'A batter is out if bowled, caught, run out, lbw, stumped, hit wicket, handled the ball, obstructing the field, or timed out.',
        'The striker is the batter facing the delivery, while the non-striker stands at the other end ready to run.',
        'Batsmen must ground their bat or body behind the popping crease to be safe during a run-out attempt.',
        'A wicket falls when the bails are removed by the fielding side, often after a clean catch or direct hit.',
      ],
    },
    {
      title: 'Scoring and extras',
      items: [
        'A bowler delivers six legal balls to complete one over, with no-ball and wide deliveries adding extra runs to the batting side.',
        'A no-ball is called for overstepping, dangerous bowling, or an illegal delivery action, and it awards one extra run.',
        'A wide is called when the ball passes too far from the striker, and it adds one run even if the batter does not hit it.',
        'The batting team can score four runs by reaching the boundary after touching the ground, and six runs by clearing the boundary on the full.',
        'A leg bye is awarded if the batter does not hit the ball but the ball deflects off the body and the batters run successfully.',
        'A byes total is awarded when the wicketkeeper or fielders fail to stop the ball cleanly, and the batters run for extras.',
      ],
    },
    {
      title: 'Match formats',
      items: [
        'In Test cricket, each team bats twice, and the side with the most runs after both innings wins the match.',
        'In ODI cricket, each side bats for a maximum of 50 overs, and the team with the higher score wins if the overs are completed.',
        'In T20 cricket, each side gets 20 overs, creating a more aggressive, high-scoring and fast-moving game.',
        'The Duckworth-Lewis-Stern method is used to revise targets in rain-affected limited-overs matches.',
        'The Powerplay in ODIs and T20s limits the number of fielders allowed outside the 30-yard circle during the first overs.',
      ],
    },
    {
      title: 'Batting and bowling skills',
      items: [
        'A batter can use defensive strokes, drives, cuts, pulls, hooks, sweeps, and reverse sweeps to score runs.',
        'The on-drive, cover drive, and straight drive are classic batting shots used to find gaps in the field.',
        'The pull and hook are attacking shots played against short deliveries, especially in Test and T20 cricket.',
        'A slog sweep is often used in T20 cricket to hit a spinner over the leg side for boundaries.',
        'Spin bowlers use flight, turn, and variation to deceive batters and control the run rate.',
        'Fast bowlers rely on pace, swing, seam movement, and accuracy to create pressure and wickets.',
        'A short ball can be risky, but it can also force a batter into an attacking shot that leads to a wicket.',
        'A yorker is a delivery aimed at the batter’s feet, often used to restrict scoring and dismiss batters.',
        'A bouncer is a short-pitched delivery that rises sharply, and it must be bowled safely without endangering the batter.',
        'A full toss is a delivery that reaches the striker without bouncing, and it can be dangerous if too high.',
      ],
    },
    {
      title: 'Fielding and tactics',
      items: [
        'The wicketkeeper stands behind the stumps and is the main defender against wides, no-balls, and stumpings.',
        'Fielders may use slips, gully, point, cover, midwicket, and deep positions to control runs and take catches.',
        'The fielding side can use a leg slip, silly point, and short fine leg to create pressure on the batter.',
        'The bowling side can rotate bowlers to attack specific batters, conserve energy, and manage the overs.',
        'A dot ball is a legal delivery in which no runs are scored, and it is valuable in pressure situations.',
        'A maiden over is an over in which the batting side scores zero runs, a key tactical achievement for bowlers.',
      ],
    },
    {
      title: 'Umpires and reviews',
      items: [
        'Umpires signal wides, no-balls, boundaries, byes, leg byes, and dismissals using clear hand signals.',
        'The third umpire reviews close calls using replay technology and slow-motion footage in modern matches.',
        'DRS allows teams to challenge on-field decisions for lbw, catches, run-outs, and other key decisions.',
        'A player can appeal for a wicket, but the umpire decides whether the dismissal is valid under the laws.',
        'A captain’s challenge, where available, allows a team to review a key on-field decision using replay technology.',
      ],
    },
    {
      title: 'ICC laws and conduct',
      items: [
        'The ICC Laws of Cricket are the global framework, while domestic competitions may add local playing conditions.',
        'The laws cover bowling actions, fair play, player conduct, equipment standards, and match procedures.',
        'The spirit of cricket emphasizes respect, sportsmanship, fair play, and honesty on and off the field.',
        'A player may be penalized for time-wasting, dangerous play, or repeated dissent towards the umpires.',
        'A player can be suspended for breaching ICC Code of Conduct, especially after abusive or dangerous behavior.',
        'The match referee oversees discipline, player conduct, and major incidents during an international game.',
      ],
    },
    {
      title: 'Special situations',
      items: [
        'A batter can be declared retired hurt if injured, and can return later if the rules permit.',
        'If a batter is injured and cannot continue, the team may use a runner in some formats, depending on regulations.',
        'A substitute fielder may be used in some competitions, but a substitute batter can only come in under specific rules.',
        'Over-rate penalties are imposed when teams fail to complete their overs within the allocated time.',
        'A match may be abandoned because of weather, dangerous conditions, or unplayable pitch conditions.',
        'In rain-shortened games, reserve overs are used to ensure the match still has a fair result.',
      ],
    },
    {
      title: 'Final notes',
      items: [
        'The boundary rope marks the end of the playing area, and a ball hitting it on the full is worth four or six runs.',
        'If the ball touches the boundary after bouncing, the batter gets four; if it clears without touching, it is six.',
        'A batter can be given out hit wicket if they dislodge their own wicket while setting off for a run.',
        'A batter may also be out obstructing the field if they deliberately block or distract the fielding side.',
        'The striker’s end and non-striker’s end are both important for run-outs, grounding, and safe completion of runs.',
        'The ball must be replaced if it becomes lost, damaged, or unfit for play under the laws of the game.',
        'A one-day match can be reduced to a 20-over contest in wet conditions, keeping the game fair and competitive.',
        'The toss is one of the most important tactical moments because pitch and weather can strongly influence outcomes.',
      ],
    },
  ];

  return (
    <section className="page-card">
      <p className="eyebrow">Rules and regulations</p>
      <h1>How the game is played</h1>
      <div className="info-grid">
        {sections.map((section) => (
          <article className="mini-card" key={section.title}>
            <h2>{section.title}</h2>
            <ul className="rules-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Rules;
