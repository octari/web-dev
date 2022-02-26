
import navItems from "./NavItem.js";

const NavigationSidebar = (activePage) => {
    return (`
    <div class="list-group">
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      ${navItems.map(item => {
        return (`
            <a href="${item.href}"
                   class="list-group-item list-group-item-action ${activePage === item.title ? 'active' : ''}">
            <i class="${item.iconClasses}"></i>
            <span class="d-none d-xl-inline-block">${item.title}</span>
        </a>`);
    }).join('')
    }
      <button type="button" class="btn btn-primary btn-block rounded-pill mt-2">Tuit</button>
    </div>
  `);
}

export default NavigationSidebar;