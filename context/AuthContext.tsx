// context/AuthContext.tsx
import React from 'react';

const AuthContext = React.createContext<any>(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [user, setAuth] = React.useState<any>(null);

  return (
    <AuthContext.Provider
      value={{
        signIn: (userData: any) => setAuth(userData),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}