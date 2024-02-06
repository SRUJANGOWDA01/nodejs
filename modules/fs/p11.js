const fs = require('fs')
const path = require('path')


fs.mkdirSync(path.join(__dirname, "images"))

   console.log('new directory created')
  
   /* new directory created
   */

   /* node:fs:1380
  const result = binding.mkdir(
                         ^

Error: EEXIST: file already exists, mkdir 'E:\BE PRATICAL\Nodejs\modules\fs\images'
    at Object.mkdirSync (node:fs:1380:26)
    at Object.<anonymous> (E:\BE PRATICAL\Nodejs\modules\fs\p11.js:5:4)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  errno: -4075,
  code: 'EEXIST',
  syscall: 'mkdir',
  path: 'E:\\BE PRATICAL\\Nodejs\\modules\\fs\\images'
}
 */