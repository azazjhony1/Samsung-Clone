import "./FooterNavCategory.css";

const FooterNavCategory = (props) => {
  return (
    <div className={`footerNavCategory ` + props.className}>
      <h2 className="footerNavHeading">{props.heading}</h2>

      <ul className="footerNavCategoryLists">
        {props.items.map((elem, index) => {
          return (
            <li className="footerNavCategoryList">
              <a className="footerNavCategoryAnchor">
                {elem}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNavCategory;
