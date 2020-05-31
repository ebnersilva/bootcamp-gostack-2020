import React from 'react';
import { ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
