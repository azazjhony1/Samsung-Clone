import "./footerNavigation.css";
import FooterNavCategory from "./FooterNavCategory";

const FooterNav = () => {
  const heading1 = 'Product & Service';
  const items1 = ['Smartphones', 'Tablets' ,'Audio Sound', 'Watches', 'Smart Switch', 'TVs', 'Refrigerators', 'Laundry', 'Air Solutions', 'Monitors'];

  const heading2 = 'Shop';
  const items2 = ['Offer', 'Samsung Members' ,'Store Locator', 'Samsung Experience Store', 'Online Shop FAQs', 'Online Shop FAQs'];

  const heading3 = 'Support';
  const items3 = ['Contact Us ', 'Phone Support' ,'Email Support', 'Contact the President(CEO)', 'Community', 'Give Us FeedBack', 'WhatsApp Us'];

  const heading4 = 'Sustainability';
  const items4 = ['Overview', 'Environment' ,'Corporate Citizenship', 'Digital Responsibility', 'Security & Privacy', 'Labor & Human Rights', 'Sustainable Supply Chain', 'Accessibility', 'Diversity & Inclusions'];


  const heading5 = 'About Us';
  const items5 = ['Company Info', 'Business Area' ,'Brand Identity', 'Careers', 'Investor Relations', 'Newsroom', 'Samsung Innovation Campus', 'Samsung Design', 'Ethics'];




  return (
    <div className="footerNavContainer">
      <FooterNavCategory heading={heading1} items={items1} />
      <FooterNavCategory heading={heading2} items={items2} />
      <FooterNavCategory heading={heading3} items={items3} />
      <div className="footerNavCategories">
      <FooterNavCategory heading={heading4} items={items4} className={'cat4'}/>
      <FooterNavCategory heading={heading5} items={items5} className={'cat5'}/>
      </div>
    </div>
  );
};

export default FooterNav;
