setTimeout(() => {
  throw new Error("oops not error outside express.js")
}, 300)


// Node Error Handling
process.on('uncaughtException', () => {
  
})