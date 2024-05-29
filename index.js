function main() {
  return "running";
}

main()
  .then(res => console.log(res)
  .catch(err => console.log(err.message));
