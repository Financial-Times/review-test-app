console.log('From Worker')
setTimeout(() => {
  console.log('Inside timeout2')
  process.exit(0)
}, 10000)