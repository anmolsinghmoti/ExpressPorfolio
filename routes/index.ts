import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me' });
});

router.get('/projects', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Projects' });
});

router.get('/services', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services' });
});

router.get('/contact', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact' });
});



export default router;
