const getRandomNumbers = () => {
  const rand_a = Math.random();
  const rand_b = Math.random();
  return {rand_a, rand_b}
}

const {rand_a, rand_b} = getRandomNumbers()

const bigger = Math.max(rand_a, rand_b);
const smaller = Math.min(rand_a, rand_b);


