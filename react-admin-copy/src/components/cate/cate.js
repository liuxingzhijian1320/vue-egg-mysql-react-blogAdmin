import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

class Buttons extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="分类" second="列表" />
                Buttons Buttons Buttons Buttons Buttons Buttons
            </div>
        )
    }
}

export default Buttons;
