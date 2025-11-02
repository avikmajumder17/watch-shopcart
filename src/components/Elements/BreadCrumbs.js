export const BreadCrumbs = ({product}) => {
    return (
        <div className="title-breadcrumbs">
            <div className="container">
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="items">
                            <li className="item home">
                                <a href="default/index.html" title="Go to Home Page">
                                    Home
                                </a>
                            </li>
                            <li className="item category96">
                                <a href="default/categories-demo.html" title="">
                                    Categories Demo
                                </a>
                            </li>
                            <li className="item category99">
                                <a href="default/categories-demo/right-sidebar.html" title="">
                                    Right Sidebar
                                </a>
                            </li>
                            <li className="item product">
                                <strong>{product.name}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}