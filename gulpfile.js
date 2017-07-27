const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("watch", ["build"], () => {
  gulp.watch("Src/**/*.+(ts|tsx)", ["build"]);
});

gulp.task("build", () => {
  var tsResult = gulp
    .src("Src/**/*.+(ts|tsx)")
    .pipe(tsProject()); 

  return tsResult.js.pipe(gulp.dest("App"));
});
