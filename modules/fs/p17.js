const fs = require('fs')

fs.stat('./new.txt', (err,stats) => {
    if(err) console.log(err)
    console.log('stats =', stats)
})

/* stats = Stats {
  dev: 3590871273,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949953434361,
  size: 167,
  blocks: 0,
  atimeMs: 1707198028628.816,
  mtimeMs: 1707195141342.1973,
  ctimeMs: 1707198498295.0378,
  birthtimeMs: 1707194841979.4705,
  atime: 2024-02-06T05:40:28.629Z,
  mtime: 2024-02-06T04:52:21.342Z,
  ctime: 2024-02-06T05:48:18.295Z,
  birthtime: 2024-02-06T04:47:21.979Z
} */