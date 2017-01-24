const details = {
  '1': {
    id: 1,
    title: 'Retour d\'Antoine',
    progress: 30,
    color: 'blue',
    timeRemaining: ''
  },
  '2': {
    id: 2,
    title: 'Dessins animés Camille',
    progress: 100,
    color: 'orange',
    timeRemaining: ''
  },
  '3': {
    id: 3,
    title: 'La sortie du nouveau Zelda',
    progress: 40,
    color: 'red',
    timeRemaining: ''
  }
}

export function getDetail (id, cb) {
  // fake API request
  setTimeout(() => {
    if (details[id]) {
      cb(null, details[id])
    } else {
      cb(new Error('Event not found.'))
    }
  }, 100)
}
