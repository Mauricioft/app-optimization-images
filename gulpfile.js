const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const sharpResponsive = require('gulp-sharp-responsive')

gulp.task('imagemin', async () => {
  await gulp.src('images/compression/*')
    .pipe(imagemin([
      pngquant({
        quality: [0.5, 0.5]
      }),
      mozjpeg({
        quality: 50
      })
    ]))
    .pipe(gulp.dest('src/assets/images/compression/'))
})

gulp.task('sharpall', async () => {
  await gulp.src('src/assets/images/compression/*.{jpg,png}')
    .pipe(sharpResponsive({
      includeOriginalFile: true,
      formats: [
        { width: 450, format: 'jpeg', rename: { suffix: '-sm' } },
        { width: 750, format: 'jpeg', rename: { suffix: '-md' } },
        { width: 1024, format: 'jpeg', rename: { suffix: '-lg' } },

        { width: 450, format: 'png', rename: { suffix: '-sm' } },
        { width: 750, format: 'png', rename: { suffix: '-md' } },
        { width: 1024, format: 'png', rename: { suffix: '-lg' } },

        { width: 450, format: 'webp', rename: { suffix: '-sm' } },
        { width: 750, format: 'webp', rename: { suffix: '-md' } },
        { width: 1024, format: 'webp', rename: { suffix: '-lg' } },
      ]
    }))
    .pipe(gulp.dest('src/assets/images/sharp/'))
})

gulp.task('sharponlyjpg', async () => {
  await gulp.src('src/assets/images/compression/*.jpg')
    .pipe(sharpResponsive({
      includeOriginalFile: true,
      formats: [
        { width: 450, format: 'jpeg', rename: { suffix: '-sm' } },
        { width: 750, format: 'jpeg', rename: { suffix: '-md' } },
        { width: 1024, format: 'jpeg', rename: { suffix: '-lg' } },
      ]
    }))
    .pipe(gulp.dest('src/assets/images/sharp/'))
})

gulp.task('sharppng', async () => {
  await gulp.src('src/assets/images/compression/*.png')
    .pipe(sharpResponsive({
      formats: [
        { width: 450, format: 'png', rename: { suffix: '-sm' } },
        { width: 750, format: 'png', rename: { suffix: '-md' } },
        { width: 1024, format: 'png', rename: { suffix: '-lg' } },
      ]
    }))
    .pipe(gulp.dest('src/assets/images/sharp/'))
})
