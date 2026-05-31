function main() {
  console.log("running");
  return "running";
}

main()
  .then(res => console.log(res)
  .catch(err => console.log(err.message));
