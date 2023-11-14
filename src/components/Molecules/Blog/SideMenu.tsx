import AppText from '../../Atom/AppText';
import SideMenuCategories from './SideMenuCategories';
import SideMenuPosts from './SideMenuPosts';

const SideMenu = () => {
  return (
    <div className="hidden xl:block xl:w-3/12 xl:mt-14 ">
      <h2 className="text-base font-normal text-gray">{"What's hot"}</h2>

      <AppText
        type="text"
        style={''}
        textStyle={'text-gray/90 font-bold text-2xl capitalize my-10'}
      >
        Most Popular
      </AppText>
      <SideMenuPosts withImage={false} />
      <h2 className="text-base font-normal text-gray">Discover by topic</h2>
      <AppText
        type="text"
        style={''}
        textStyle={'text-gray/90 font-bold text-2xl capitalize my-10'}
      >
        Categories
      </AppText>
      <SideMenuCategories />
      <h2 className="text-base font-normal text-gray">Chosen by the editor</h2>
      <AppText
        type="text"
        style={''}
        textStyle={'text-gray/90 font-bold text-2xl capitalize my-10'}
      >
        Editors Pick
      </AppText>
      <SideMenuPosts withImage={true} />
    </div>
  );
};

export default SideMenu;
