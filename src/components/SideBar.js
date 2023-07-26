import React from 'react'

export default function SideBar() {
    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width:280 + 'px',height:90+'vh'}}>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link active" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-body-emphasis">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-body-emphasis">
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-body-emphasis">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-body-emphasis">
                                Customers
                            </a>
                        </li>
                    </ul>
                    </div>
            </div>
            )
}
