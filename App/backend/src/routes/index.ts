// @ts-nocheck
import postsRoutes from './posts';
import uploadRoutes from './file';
import filtersRoutes from './filters';
import authRoutes from './auth';
import commentsRoutes from './comments';
import usersRoutes from './user';

const routes = (app) => {
  app.use('/backend/posts', postsRoutes);
  app.use('/backend/upload', uploadRoutes);
  app.use('/backend/auth', authRoutes);
  app.use('/backend/comments', commentsRoutes);
  app.use('/backend/users', usersRoutes);
  app.use('/backend/filters', filtersRoutes);

  app.get('/backend/ping', (req, res) => {
    res.send('🏓 Pong!');
  });
};

export default routes;
