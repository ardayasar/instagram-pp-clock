const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const width = 300
const height = 300


for(var h = 0;h<24;h++){
    for(var m = 0;m<60;m++){
        for(var s = 0;s<60;s++){
            
            const canvas = createCanvas(width, height)
            const context = canvas.getContext('2d')

            context.fillStyle = '#000'
            context.fillRect(0, 0, width, height)

            context.font = 'bold 40pt Menlo'
            context.textAlign = 'center'
            context.textBaseline = 'top'
            context.fillStyle = '#3574d4'

            const text = h + ':' + m + ':' + s

            context.fillStyle = '#fff'
            context.fillText(text, 150, 120)

            const buffer = canvas.toBuffer('image/jpeg')
            fs.writeFileSync('times/' + h + '-' + m + '-' + s + '.jpg', buffer)


        }
    }
}

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect(0, 0, width, height)

context.font = 'bold 40pt Menlo'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#3574d4'

const text = H + ':' + M + ':' + S

context.fillStyle = '#fff'
context.fillText(text, 150, 120)

const buffer = canvas.toBuffer('image/jpeg')
fs.writeFileSync('times/' + H + '-' + M + '-' + S + '.jpg', buffer)

