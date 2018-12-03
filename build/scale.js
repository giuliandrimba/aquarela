const config = require('../config.json')

const scale = ctx => {
    const size = ctx.canvas.width / config.thumbnail_size;
    return (value) => value * size
}

module.exports = scale;