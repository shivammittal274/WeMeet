const io = require("../../server").io;

let connections = {}
let rejected = {}
let messages = {}
let timeOnline = {}
let socketusers = {}
const maxConnectionattempts = 3


module.exports = (socket) => {
  try {
    console.log("Connecnted")
    socket.on('join-call', (path, extra) => {
      if (rejected[path] === undefined) {
        rejected[path] = []
      }
      if ((!rejected[path][extra.email]) || (rejected[path][extra.email] < maxConnectionattempts)) {
        if (connections[path] === undefined) {
          connections[path] = []
          connections[path].push(socket.id)
          // ---------------------------------------------------------------
          // if(socketusers[path]===undefined){
          // 	socketusers[path] = []
          // 	socketusers[path][socket.id] = []
          // 	socketusers[path][socket.id].push(extra)
          // }else if(socketusers[path][socket.id]===undefined){
          // 	socketusers[path][socket.id] = []
          // 	socketusers[path][socket.id].push(extra)
          // }
          if (socketusers[path] === undefined) {
            socketusers[path] = []
          }
          socketusers[path][socket.id] = extra;
          // ---------------------------------------------------------------
          timeOnline[socket.id] = new Date();
          for (let a = 0; a < connections[path].length; ++a) {
            // console.log(socketusers[path])
            io.to(connections[path][a]).emit("user-joined", socket.id, connections[path]); //, socketusers[path]);
          }
          if (messages[path] !== undefined) {
            for (let a = 0; a < messages[path].length; ++a) {
              io.to(socket.id).emit("chat-message", messages[path][a]['data'], messages[path][a]['sender']);
            }
          }
          console.log(path, connections[path])
          // console.log(socketusers[path])
        } else {
          io.to(socket.id).emit('waiting');
          io.to(connections[path][0]).emit('participation-request', path, socket.id, extra);
        }
      } else {
        io.to(socket.id).emit('banned');
      }
    });

    socket.on('confirm-user', (path, sid) => {
      connections[path].push(sid);
      io.to(sid).emit('join-success')

      timeOnline[sid] = new Date();

      for (let a = 0; a < connections[path].length; ++a) {
        io.to(connections[path][a]).emit("user-joined", sid, connections[path]);
      }

      if (messages[path] !== undefined) {
        for (let a = 0; a < messages[path].length; ++a) {
          io.to(sid).emit("chat-message", messages[path][a]['data'], messages[path][a]['sender']);
        }
      }
      console.log(path, connections[path])
    })

    socket.on('reject-user', (path, id, extra) => {
      if (rejected[path][extra.email] === undefined) {
        rejected[path][extra.email] = 1
      } else {
        rejected[path][extra.email] = rejected[path][extra.email] + 1
      }
      io.to(id).emit('rejected')
    })

    socket.on('signal', (toId, message) => {
      io.to(toId).emit('signal', socket.id, message);
    });

    // socket.on("message", function(data){
    // 	io.sockets.emit("broadcast-message", socket.id, data);
    // })

    socket.on('closed-captions', function (data) {
      var key;
      var ok = false
      for (const [k, v] of Object.entries(connections)) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k
            ok = true
          }
        }
      }

      if (ok === true) {
        for (let a = 0; a < connections[key].length; ++a) {
          io.to(connections[key][a]).emit("closed-captions", data);
        }
      }
    })

    socket.on('chat-message', function (data) {
      var key;
      var ok = false
      for (const [k, v] of Object.entries(connections)) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k
            ok = true
          }
        }
      }

      if (ok === true) {
        if (messages[key] === undefined) {
          messages[key] = []
        }
        messages[key].push({
          "sender": socket.id,
          "data": data
        })
        console.log("message", key, data)

        for (let a = 0; a < connections[key].length; ++a) {
          io.to(connections[key][a]).emit("chat-message", data, socket.id);
        }
      }
    })
    socket.on('canvas-data', (data) => {
      socket.broadcast.emit('canvas-data', data);

    })

    socket.on('disconnect', function () {
      var diffTime = Math.abs(timeOnline[socket.id] - new Date());
      var key;
      for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k

            for (let a = 0; a < connections[key].length; ++a) {
              io.to(connections[key][a]).emit("user-left", socket.id);
            }

            var index = connections[key].indexOf(socket.id);
            connections[key].splice(index, 1);

            console.log(key, socket.id, Math.ceil(diffTime / 1000));

            if (connections[key].length === 0) {
              delete connections[key]
            }
          }
        }
      }
    })
  } catch (ex) {
    console.log(ex.message);
  }
};