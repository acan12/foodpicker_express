import React, { Component } from 'react';

export const MenuLeftUIElementComponent = React.createClass({

  render: () => {
    return (
      <li className="gui-folder">
        <a>
          <div className="gui-icon"><i className="fa fa-puzzle-piece fa-fw"></i></div>
          <span className="title">UI elements</span>
        </a>

        <ul>
          <li><a href="../../html/ui/colors.html" ><span className="title">Colors</span></a></li>
          <li><a href="../../html/ui/typography.html" ><span className="title">Typography</span></a></li>
          <li><a href="../../html/ui/cards.html" ><span className="title">Cards</span></a></li>
          <li><a href="../../html/ui/buttons.html" ><span className="title">Buttons</span></a></li>
          <li><a href="../../html/ui/lists.html" ><span className="title">Lists</span></a></li>
          <li><a href="../../html/ui/tabs.html" ><span className="title">Tabs</span></a></li>
          <li><a href="../../html/ui/accordions.html" ><span className="title">Accordions</span></a></li>
          <li><a href="../../html/ui/messages.html" ><span className="title">Messages</span></a></li>
          <li><a href="../../html/ui/offcanvas.html" ><span className="title">Off-canvas</span></a></li>
          <li><a href="../../html/ui/grid.html" ><span className="title">Grid</span></a></li>
          <li className="gui-folder">
            <a href="javascript:void(0);">
              <span className="title">Icons</span>
            </a>
            <ul>
              <li><a href="../../html/ui/icons/materialicons.html" ><span className="title">Material Design Icons</span></a></li>
              <li><a href="../../html/ui/icons/fontawesome.html" ><span className="title">Font Awesome</span></a></li>
              <li><a href="../../html/ui/icons/glyphicons.html" ><span className="title">Glyphicons</span></a></li>
              <li><a href="../../html/ui/icons/skycons.html" ><span className="title">Skycons</span></a></li>
            </ul>
          </li>
        </ul>
      </li>
    )
  }

});
