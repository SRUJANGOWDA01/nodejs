const os = require('os')

console.log(`cpus =`, os.cpus());
console.log(`arch =`,os.arch());
console.log(`freememory =`,os.freemem());
console.log(`home dir =`,os.homedir());
console.log(`hostname =`,os.hostname());
console.log(`avg load =`,os.loadavg());
console.log(`release =`, os.release());
console.log(`user info =`,os.userInfo());
console.log(`version =`,os.version());
console.log(`uptime =`,os.uptime());
console.log(`machine =`,os.machine());
console.log(`network =`,os.networkInterfaces());

/* cpus = [
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 39125, nice: 0, sys: 24968, idle: 1524375, irq: 2312 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 20984, nice: 0, sys: 12796, idle: 1554328, irq: 265 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 45109, nice: 0, sys: 24375, idle: 1518625, irq: 656 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 25093, nice: 0, sys: 15359, idle: 1547656, irq: 156 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 33328, nice: 0, sys: 20328, idle: 1534453, irq: 359 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 24875, nice: 0, sys: 12875, idle: 1550359, irq: 109 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 46656, nice: 0, sys: 18296, idle: 1523156, irq: 390 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 31843, nice: 0, sys: 11750, idle: 1544515, irq: 187 }
  }
]
arch = x64
freememory = 3470815232
home dir = C:\Users\Srujan Gowda
hostname = DESKTOP-APCNQBC
avg load = [ 0, 0, 0 ]
release = 10.0.22621
user info = {
  uid: -1,
  gid: -1,
  username: 'Srujan Gowda',
  homedir: 'C:\\Users\\Srujan Gowda',
  shell: null
}
version = Windows 11 Home Single Language
uptime = 1588.5
machine = x86_64
network = {
  'Wi-Fi': [
    {
      address: 'fe80::355b:deb2:6bd5:4dc8',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'd4:6a:6a:9a:6c:e1',
      internal: false,
      cidr: 'fe80::355b:deb2:6bd5:4dc8/64',
      scopeid: 3
    },
    {
      address: '192.168.1.69',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'd4:6a:6a:9a:6c:e1',
      internal: false,
      cidr: '192.168.1.69/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
} */