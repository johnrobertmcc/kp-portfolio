import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
