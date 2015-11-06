//Buffer() =====================
var buf = new Buffer('Hello', 'utf8');
console.log(buf)
console.log(buf.toString())
console.log(buf.toJSON())
console.log(buf.toJSON().data)
console.log(buf[2])

buf.write('wow')
console.log(buf.toString())

//ArrayBuffer() ================
var buffer = new ArrayBuffer(8) //storing 8 bytes = 64 bits
var view = new Int32Array(buffer) //helps convert the binary data
view[0] = 5
view[1] = 15
view[2] = 30 //doesnt show because we are storing 64 bits and each number is 32 bits
console.log(view);