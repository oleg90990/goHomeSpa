export default (dataURL: string, maxWidth: number = 700, maxHeight: number = 1000): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      let scale = 1;

      if (img.width < maxWidth) {
        scale = maxWidth / img.width
      } else {
        scale = maxHeight / img.height
      }

      const newWidth = img.width * scale
      const newHeight = img.height * scale

      const canvas = document.createElement('canvas')
      canvas.height = newHeight
      canvas.width = newWidth
      const ctx = canvas.getContext('2d')

      if (ctx) {
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, newWidth, newHeight)
      } else {
        reject()
      }

      resolve(canvas.toDataURL())
    }

    img.src = dataURL
  })
}
