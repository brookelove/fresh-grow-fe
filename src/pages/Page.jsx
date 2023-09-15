import PageContent from './PageContent';

import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  // useEffect(() => {
  //   // document.title = capitalizeFirstLetter(currentPage);
  // }, [currentPage]);

  return (
    <section>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;