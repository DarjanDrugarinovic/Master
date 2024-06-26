import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import { CreatePost, Home, Login, Profile, Register, ViewPost } from '../pages';
import PrivateRoutes from './PrivateRoutes';
import Posts from '../pages/profile/components/Posts';
import CommentedPosts from '../pages/profile/components/CommentedPosts';
import UserInfo from '../pages/profile/components/userInfo/UserInfo';
import ReportedPosts from '../pages/profile/components/reportedPosts/ReportedPosts';
import ReportedComments from '../pages/profile/components/reportedComments/ReportedComments';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import RegistrationConfirm from '../pages/registrationConfirm/RegistrationConfirm';
import Videos from '../pages/Videos/Videos';

export default function Router() {
  const privateRoutes = (
    <Route element={<PrivateRoutes />}>
      <Route path={routes.createPostRoute} element={<CreatePost />} exact />
      <Route path={routes.profileRoute} element={<Profile />}>
        <Route path={routes.profilePostsRoute} element={<Posts />} />
        <Route
          path={routes.profileCommentedPostsRoute}
          element={<CommentedPosts />}
        />
        <Route path={routes.profileInfoRoute} element={<UserInfo />} />
        <Route
          path={routes.profileReportedPostsRoute}
          element={<ReportedPosts />}
        />
        <Route
          path={routes.profileReportedCommentsRoute}
          element={<ReportedComments />}
        />
      </Route>
    </Route>
  );

  const publicRoutes = (
    <>
      <Route path={routes.videosRoute} element={<Videos />} exact />
      <Route path={routes.viewPostRoute} element={<ViewPost />} exact />
      <Route path={routes.homeRoute} element={<Home />} />
      <Route path={routes.loginRoute} element={<Login />} />
      <Route path={routes.registerRoute} element={<Register />} />
      <Route path={routes.resetPasswordRoute} element={<ResetPassword />} />
      <Route
        path={routes.registrationConfirmRoute}
        element={<RegistrationConfirm />}
      />
    </>
  );

  return (
    <Routes>
      {privateRoutes}
      {publicRoutes}
      <Route path={'*'} element={<Home />} />
    </Routes>
  );
}
