import { ClerkProvider } from '@clerk/clerk-react';

export function ClerkProviderWrapper({ children }) {
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
  }
  
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
} 