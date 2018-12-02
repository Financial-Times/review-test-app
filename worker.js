console.log('From Worker')
setTimeout(() => {
  console.log('Inside timeout')
  process.exit(0)
}, 10000)