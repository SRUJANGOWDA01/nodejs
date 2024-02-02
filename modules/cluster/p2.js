//isWorker => this method is true if current process is worker (child)

const cluster = require('cluster')

if(cluster.isWorker) {
    console.log(`new thread is running`)
} else {
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}

/* new thread is running
new thread is running
new thread is running
new thread is running */