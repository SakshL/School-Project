

const Navbar = () => {
    return (<nav>
        <ul className="navlinks p-4 pb-10">
            <li className="applelogo"> <a title="mainpage" href="https://sakshyambaral.com.np/"><svg xmlns="http://www.w3.org/2000/svg" height="25px"
                data-name="Layer 1" viewBox="0 0 24 24" id="apple">
                <path fill="#d3d3d3"
                    d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z">
                </path>
            </svg></a></li>
            <li> <a title="macpage" className='navlink' href="https://sakshyambaral.com.np/">Mac</a></li>
            <li> <a title="storepage" className='navlink' href="https://sakshyambaral.com.np/">Store</a></li>
            <li> <a title="ipadpage" className='navlink' href="https://sakshyambaral.com.np/">iPad</a></li>
            <li> <a title="iphonepage" className='navlink' href="https://sakshyambaral.com.np/">iPhone</a></li>
            <li> <a title="watchpage" className='navlink' href="https://sakshyambaral.com.np/">Watch</a></li>
            <li> <a title="airpodspage" className='navlink' href="https://sakshyambaral.com.np/">AirPods</a></li>
            <li> <a title="tvhomepage" className='navlink' href="https://sakshyambaral.com.np/">TV & Home</a></li>
            <li> <a title="entertainpage" className='navlink' href="https://sakshyambaral.com.np/">Entertainment</a></li>
            <li> <a title="accesoriespage" className='navlink' href="https://sakshyambaral.com.np/">Accessories</a></li>
            <li> <a title="helppage" className='navlink' href="https://sakshyambaral.com.np/">Support</a></li>

            <svg xmlns="http://www.w3.org/2000/svg" height="20px"
                viewBox="0 0 24 24" id="search">
                <path fill="#d3d3d3"
                    d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z">
                </path>
            </svg>
            &nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                width="20" height="20" id="bag">
                <switch>
                    <g>
                        <path fill="#d3d3d3"
                            d="M68 24v-4C68 8.954 59.046 0 48 0S28 8.954 28 20v4H12v60c0 6.63 5.37 12 12 12h48c6.63 0 12-5.37 12-12V24H68zm-32-4c0-6.627 5.373-12 12-12s12 5.373 12 12v4H36v-4zm40 64c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V32h56v52z">
                        </path>
                    </g>
                </switch>
            </svg>
        </ul>
    </nav >)
}

export default Navbar