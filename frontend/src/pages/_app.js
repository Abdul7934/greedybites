import { ClerkProviderWrapper } from '../providers/ClerkProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProviderWrapper>
      <Component {...pageProps} />
    </ClerkProviderWrapper>
  );
}

export default MyApp; 