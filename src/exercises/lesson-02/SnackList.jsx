function SnackList() {
  const snacks = [
    { name: 'cheddar popcorn', rank: 4 },
    { name: "Reese's miniature cups", rank: 3 },
    { name: 'Twix candy bars', rank: 2 },
    { name: 'potato chips', rank: 1 },
  ];

  // order snacks from most favorite to least
  const orderedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {orderedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;
